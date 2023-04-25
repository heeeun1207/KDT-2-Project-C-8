const http = require('http');
const fs = require('fs');
const path = require('path');

const handleResponse = (req, res, filePath, contentType) => {
  const fullPath = path.join(__dirname, filePath); 
  fs.readFile(fullPath, (err, data) => {
    if (err) {
      res.writeHead(500, { 'Content-Type': 'text/html; charset=utf-8' });
      res.end('Error');
    } else {
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(data);
    }
  });
};

const server = http.createServer((req, res) => {
  if (req.url === '/' && req.method === 'GET') {
    handleResponse(req, res, 'index.html', 'text/html; charset=utf-8');
  }else if (req.url === '/profile.png' && req.method === 'GET') {
    handleResponse(req, res, 'sub/profile.png', 'image/png');
    //에러 -> 파일 경로 ,존재 , 권한 확인 
  } else if (req.url === '/login.html' && req.method === 'GET') {
    handleResponse(req, res, 'sub/login.html', 'text/html; charset=utf-8');
  } else if (req.url === '/testpage.html' && req.method === 'GET') {
    handleResponse(req, res, 'sub/testpage.html', 'text/html; charset=utf-8');
  } else if (req.url === '/eventprac.html' && req.method === 'GET') {
    handleResponse(req, res, 'sub/eventprac.html', 'text/html; charset=utf-8');
  } else if (req.url === '/ecoLife.html' && req.method === 'GET') {
    handleResponse(req, res, 'sub/ecoLifePage/ecoLife.html', 'text/html; charset=utf-8');
  } else if (req.url === '/ecoscript.js' && req.method === 'GET') {
    handleResponse(req, res, 'sub/ecoLifePage/ecoscript.js', 'text/javascript; charset=utf-8');
  } else if (req.url === '/ecostyle.css' && req.method === 'GET') {
    handleResponse(req, res, 'sub/ecoLifePage/ecostyle.css', 'text/css; charset=utf-8');
  } else {
    res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end('Not Found');
  }
});

server.listen(3040, () => {
  console.log('Server3040');
});
