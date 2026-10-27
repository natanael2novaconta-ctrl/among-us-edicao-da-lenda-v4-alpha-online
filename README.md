# Among Us: Edição da Lenda — V4 Alpha Online (servidor inicial)

Este pacote inicia a base de rede para salas online: criação de sala pública/privada, códigos de seis caracteres, lista pública, limite de participantes, configurações do anfitrião, transferência de anfitrião e espaços de bots ao iniciar um teste.

## Requisitos
- Node.js 20 ou mais recente
- npm

## Executar localmente
```bash
npm install
npm start
```
Abra `http://localhost:3000` em duas abas ou em dois dispositivos na mesma rede (para outro dispositivo, use o IP local do computador que está executando o servidor).

## Publicar no Render
1. Envie o conteúdo desta pasta para o repositório GitHub do projeto.
2. No Render, crie um Web Service ligado ao repositório, ou use o Blueprint `render.yaml`.
3. Build command: `npm install`; Start command: `npm start`.
4. Após o deploy, teste `/health` e abra a URL pública.

## Eventos Socket.IO implementados
- `room:create`
- `room:join` (salas públicas)
- `room:join-private` (entrada por código)
- `room:settings` (somente anfitrião)
- `room:start` (teste de início e adição de espaços de bots)
- `room:leave`
- Recebidos: `rooms:list`, `rooms:updated`, `room:updated`, `match:starting`, `player:left`

## Limites desta etapa
- Isto é uma fundação de servidor/salas, não a V4 completa.
- Bots são placeholders, sem IA ou comportamento de jogo ainda.
- O início de partida apenas muda o estado da sala; movimentação, tarefas, morte, sabotagens, reuniões e votação ainda precisam ser implementadas.
- O código da sala privada funciona como segredo de entrada nesta versão inicial; convites autenticados, contas, rate limiting e proteções de produção ainda são necessários.
- As salas ficam em memória e são perdidas se o processo reiniciar. Persistência/escala ainda não foi adicionada.
- Antes de abrir publicamente, implementar autenticação/limites de abuso e revisar as regras de entrada em salas privadas.
