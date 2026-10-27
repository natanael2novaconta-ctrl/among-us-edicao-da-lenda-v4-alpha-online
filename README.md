# Among Us: Edição da Lenda — V4 Alpha Online

Primeira versão jogável online para Render, com salas em tempo real via Socket.IO.

## Recursos nesta build
- Salas públicas e privadas com código de 6 caracteres.
- Até 15 participantes por sala; anfitrião escolhe 1–3 impostores e quantos bots adicionar.
- Mapa top-down com áreas da nave, personagens, nomes e painéis de tarefas.
- Movimento por WASD/setas no PC e controles direcionais na tela touch.
- Papéis de tripulante e impostor; eliminação com recarga, corpo, reunião, votação e condição de vitória.
- Tarefas com progresso individual e progresso global, sabotagens e reparo.
- Bots básicos para preencher vagas e simular movimento/tarefas e algumas eliminações.
- Endpoint `/health` e listagem `/api/rooms`.

## Deploy no Render
O `render.yaml` usa Node.js e executa `npm install` / `npm start`. O Render deve manter a pasta `public` junto com `server.js` e `package.json`.

## Importante
Esta é uma Alpha jogável inicial, não uma implementação final de todos os 100 itens do planejamento V4. Algumas funções avançadas ainda precisam de etapas próprias, incluindo funções especiais completas (Metamorfo/Engenheiro), bots com IA social e votação, salvamento de perfil/progressão, filtros avançados de salas, denúncias/bloqueios, acessibilidade detalhada, reconexão de partida e hardening de segurança. Salas ficam em memória do processo; reiniciar o servidor apaga as salas atuais. Não use como produto público final sem testes adicionais.
