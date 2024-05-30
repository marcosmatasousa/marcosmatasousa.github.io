import url from 'url';
import fs from 'fs';

function getContentType(filePath) {
    if (filePath.endsWith('.html')) {
      return 'text/html';
    } else if (filePath.endsWith('.css')) {
      return 'text/css';
    } else if (filePath.endsWith('.js')) {
      return 'application/javascript';
    } else {
      return 'text/plain';
    }
  }

export default function rotas(req, res){
    var q = url.parse(req.url);
    console.log(q);
    var filename = "." + q.pathname;
    if (filename === './') filename = './index.html';

    if(req.method === 'GET'){
        fs.readFile(filename, function(err, data) {
        if (err) {
            res.writeHead(404, {'Content-Type': 'text/html'});
            return res.end("404 Not Found");
        }
        const contentType = getContentType(filename);
        res.writeHead(200, {'Content-Type': contentType});
        res.write(data);
        return res.end();
        });
    }
    else if(req.method === 'POST' && filename === '/getform'){
      console.log('cheguei aqui')
      res.writeHead(201, {'Content-Type': 'text'});
      resposta = {
        mensagem: "Message received"
      }
      res.end(JSON.stringify(resposta));  
      return 
    }
}