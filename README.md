# Among Us: Edição da Lenda — V4 Alpha Online (pacote de teste)

## Conteúdo
- `public/index.html`: menu online V4, salas públicas/privadas, código de sala e partida online pelo Socket.IO.
- `public/v3-local.html`: jogo local original V3 Alpha, preservado para testar os sistemas locais da V3.
- O mapa do modo online foi redesenhado para seguir a geometria e nomes das salas da V3, com marcadores de tarefas aproximados às posições do mapa.
- `server.js`: servidor Node.js/Express/Socket.IO.

## Executar localmente
1. Instale Node.js 18 ou superior.
2. Na pasta do projeto, execute `npm install`.
3. Execute `npm start`.
4. Abra `http://localhost:3000`. Para jogar pela internet, publique o serviço Node no Render e use a URL pública.

## Importante: estado deste build
Este é um protótipo integrado para testes e correções, não uma versão final certificada. O modo online tem salas, movimento sincronizado, tarefas, impostores, bots, reuniões/votação e sabotagens básicas. A página `v3-local.html` mantém os sistemas locais da V3. Ainda há diferenças entre os sistemas locais e online: nem todas as funções especiais, cosméticos, loja/progressão, todas as tarefas e todos os ajustes avançados da V4 estão integrados ao servidor. O mapa online usa uma representação desenhada no canvas baseada na geometria da V3; não reutiliza diretamente o canvas/código de colisão local da V3. Teste e reporte bugs antes de publicar.
