'use strict';

const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const crypto = require('crypto');

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: { origin: process.env.ALLOWED_ORIGIN || '*', methods: ['GET', 'POST'] },
  pingInterval: 25000,
  pingTimeout: 20000
});

const PORT = Number(process.env.PORT || 3000);
const MAX_PLAYERS = 15;
const CODE_CHARS = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
const rooms = new Map();
const socketRoom = new Map();

app.use(express.json({ limit: '16kb' }));
app.use(express.static('public'));
app.get('/health', (_req, res) => res.json({ ok: true, service: 'among-us-edicao-da-lenda-v4-alpha-online', rooms: rooms.size }));
app.get('/api/rooms', (_req, res) => {
  const list = [...rooms.values()]
    .filter((room) => room.visibility === 'public' && room.status === 'lobby')
    .map(publicRoomSummary);
  res.json({ rooms: list });
});

function cleanName(value) {
  if (typeof value !== 'string') return '';
  return value.replace(/[<>\u0000-\u001F]/g, '').trim().slice(0, 18);
}
function makeCode() {
  for (let attempt = 0; attempt < 100; attempt++) {
    let code = '';
    for (let i = 0; i < 6; i++) code += CODE_CHARS[crypto.randomInt(CODE_CHARS.length)];
    if (!rooms.has(code)) return code;
  }
  throw new Error('Não foi possível gerar um código de sala.');
}
function publicRoomSummary(room) {
  return {
    code: room.code,
    name: room.name,
    players: room.players.length,
    maxPlayers: room.maxPlayers,
    impostors: room.settings.impostors,
    status: room.status
  };
}
function roomSnapshot(room) {
  return {
    ...publicRoomSummary(room),
    visibility: room.visibility,
    hostId: room.hostId,
    botsToAdd: room.settings.botsToAdd,
    players: room.players.map((p) => ({ id: p.id, name: p.name, isBot: p.isBot, isHost: p.id === room.hostId, ready: !!p.ready })),
    settings: { ...room.settings }
  };
}
function emitRoom(room) {
  io.to(room.code).emit('room:updated', roomSnapshot(room));
  io.emit('rooms:updated', [...rooms.values()].filter(r => r.visibility === 'public' && r.status === 'lobby').map(publicRoomSummary));
}
function leaveCurrentRoom(socket, reason = 'left') {
  const code = socketRoom.get(socket.id);
  if (!code) return;
  const room = rooms.get(code);
  socketRoom.delete(socket.id);
  socket.leave(code);
  if (!room) return;
  room.players = room.players.filter((p) => p.id !== socket.id);
  if (room.players.length === 0) {
    rooms.delete(code);
    io.emit('rooms:updated', [...rooms.values()].filter(r => r.visibility === 'public' && r.status === 'lobby').map(publicRoomSummary));
    return;
  }
  if (room.hostId === socket.id) {
    const nextHost = room.players.find((p) => !p.isBot) || room.players[0];
    room.hostId = nextHost.id;
  }
  emitRoom(room);
  socket.to(code).emit('player:left', { name: 'Um jogador', reason });
}

io.on('connection', (socket) => {
  socket.emit('rooms:list', [...rooms.values()].filter(r => r.visibility === 'public' && r.status === 'lobby').map(publicRoomSummary));

  socket.on('room:create', (payload = {}, callback = () => {}) => {
    if (socketRoom.has(socket.id)) return callback({ ok: false, error: 'Você já está em uma sala.' });
    const name = cleanName(payload.playerName) || 'Jogador';
    const roomName = cleanName(payload.roomName) || `Sala de ${name}`;
    const visibility = payload.visibility === 'private' ? 'private' : 'public';
    const impostors = Number(payload.impostors);
    const botsToAdd = Number(payload.botsToAdd || 0);
    const maxPlayers = Number(payload.maxPlayers || MAX_PLAYERS);
    if (![1, 2, 3].includes(impostors)) return callback({ ok: false, error: 'Escolha de 1 a 3 impostores.' });
    if (!Number.isInteger(botsToAdd) || botsToAdd < 0 || botsToAdd > MAX_PLAYERS - 1) return callback({ ok: false, error: 'Quantidade de bots inválida.' });
    if (!Number.isInteger(maxPlayers) || maxPlayers < 2 || maxPlayers > MAX_PLAYERS) return callback({ ok: false, error: 'A sala deve ter de 2 a 15 vagas.' });
    if (botsToAdd >= maxPlayers) return callback({ ok: false, error: 'Os bots não podem ocupar todas as vagas.' });
    let code;
    try { code = makeCode(); } catch (error) { return callback({ ok: false, error: error.message }); }
    const room = {
      code, name: roomName, visibility, hostId: socket.id, status: 'lobby', maxPlayers,
      settings: { impostors, botsToAdd },
      players: [{ id: socket.id, name, isBot: false, ready: true, joinedAt: Date.now() }],
      createdAt: Date.now()
    };
    rooms.set(code, room);
    socketRoom.set(socket.id, code);
    socket.join(code);
    emitRoom(room);
    callback({ ok: true, room: roomSnapshot(room) });
  });

  socket.on('room:join', (payload = {}, callback = () => {}) => {
    if (socketRoom.has(socket.id)) return callback({ ok: false, error: 'Saia da sala atual antes de entrar em outra.' });
    const code = typeof payload.code === 'string' ? payload.code.toUpperCase().replace(/[^A-Z0-9]/g, '').slice(0, 6) : '';
    const room = rooms.get(code);
    if (!room) return callback({ ok: false, error: 'Sala não encontrada.' });
    if (room.status !== 'lobby') return callback({ ok: false, error: 'A partida já começou.' });
    if (room.visibility === 'private' && payload.invited !== true) return callback({ ok: false, error: 'Esta sala é privada. Use um convite válido.' });
    if (room.players.length >= room.maxPlayers) return callback({ ok: false, error: 'A sala está cheia.' });
    const name = cleanName(payload.playerName) || 'Jogador';
    room.players.push({ id: socket.id, name, isBot: false, ready: false, joinedAt: Date.now() });
    socketRoom.set(socket.id, code);
    socket.join(code);
    emitRoom(room);
    callback({ ok: true, room: roomSnapshot(room) });
  });

  socket.on('room:join-private', (payload = {}, callback = () => {}) => {
    const code = typeof payload.code === 'string' ? payload.code.toUpperCase().replace(/[^A-Z0-9]/g, '').slice(0, 6) : '';
    const room = rooms.get(code);
    if (!room || room.visibility !== 'private') return callback({ ok: false, error: 'Código privado inválido.' });
    // O código de seis caracteres é o segredo de entrada da sala privada.
    socket.emit('__private_join_attempt__', { code });
    const name = cleanName(payload.playerName) || 'Jogador';
    if (socketRoom.has(socket.id)) return callback({ ok: false, error: 'Saia da sala atual antes de entrar em outra.' });
    if (room.status !== 'lobby') return callback({ ok: false, error: 'A partida já começou.' });
    if (room.players.length >= room.maxPlayers) return callback({ ok: false, error: 'A sala está cheia.' });
    room.players.push({ id: socket.id, name, isBot: false, ready: false, joinedAt: Date.now() });
    socketRoom.set(socket.id, code);
    socket.join(code);
    emitRoom(room);
    callback({ ok: true, room: roomSnapshot(room) });
  });

  socket.on('room:settings', (payload = {}, callback = () => {}) => {
    const code = socketRoom.get(socket.id);
    const room = rooms.get(code);
    if (!room) return callback({ ok: false, error: 'Você não está em uma sala.' });
    if (room.hostId !== socket.id) return callback({ ok: false, error: 'Somente o anfitrião pode alterar as configurações.' });
    const impostors = Number(payload.impostors ?? room.settings.impostors);
    const botsToAdd = Number(payload.botsToAdd ?? room.settings.botsToAdd);
    if (![1, 2, 3].includes(impostors)) return callback({ ok: false, error: 'Escolha de 1 a 3 impostores.' });
    if (!Number.isInteger(botsToAdd) || botsToAdd < 0 || botsToAdd > room.maxPlayers - room.players.length) return callback({ ok: false, error: 'Quantidade de bots inválida para as vagas restantes.' });
    room.settings = { impostors, botsToAdd };
    emitRoom(room);
    callback({ ok: true, room: roomSnapshot(room) });
  });

  socket.on('room:start', (_payload = {}, callback = () => {}) => {
    const code = socketRoom.get(socket.id);
    const room = rooms.get(code);
    if (!room) return callback({ ok: false, error: 'Você não está em uma sala.' });
    if (room.hostId !== socket.id) return callback({ ok: false, error: 'Somente o anfitrião pode iniciar.' });
    if (room.status !== 'lobby') return callback({ ok: false, error: 'A partida já foi iniciada.' });
    const botCount = Math.min(room.settings.botsToAdd, room.maxPlayers - room.players.length);
    for (let i = 0; i < botCount; i++) {
      room.players.push({ id: `bot-${crypto.randomUUID()}`, name: `Bot ${i + 1}`, isBot: true, ready: true, joinedAt: Date.now() });
    }
    if (room.players.length < 2) return callback({ ok: false, error: 'São necessários pelo menos 2 participantes para iniciar.' });
    if (room.settings.impostors >= room.players.length) return callback({ ok: false, error: 'É necessário ter mais tripulantes do que impostores.' });
    room.status = 'starting';
    emitRoom(room);
    io.to(code).emit('match:starting', { room: roomSnapshot(room), message: 'Sala pronta. A lógica completa da partida será adicionada na próxima etapa.' });
    callback({ ok: true, room: roomSnapshot(room) });
  });

  socket.on('room:leave', (_payload = {}, callback = () => {}) => {
    leaveCurrentRoom(socket, 'left');
    callback({ ok: true });
  });
  socket.on('disconnect', () => leaveCurrentRoom(socket, 'disconnect'));
});

server.listen(PORT, '0.0.0.0', () => {
  console.log(`V4 Alpha Online server listening on port ${PORT}`);
});
