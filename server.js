import http from 'http';
import rotas from './routes.js';

function startServer(){
  const server = http.createServer((req, res) => {
    rotas(req, res);
  });

  const port = 3000;
  const host = 'localhost';

  server.listen(port, host, () => {
    console.log(`Running server at http://${host}:${port}/`)
  })
}

startServer();