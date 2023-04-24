const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    fs.readFile(path.join(__dirname, 'index.html'), (err, data) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' }); 
        res.end('Error');
      } else {
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' }); 
        res.end(data);
      }
    });
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' }); 
    res.end('Not Found');
  }
});
server.listen(3000, () => {
  console.log('서버실행중');
});
