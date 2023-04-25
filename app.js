<<<<<<< HEAD
const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  // 요청 
  if (req.url === '/' && req.method === 'GET') {
    fs.readFile('index.html', (err, data) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end('Error');
      } else {
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end(data);
      }
    });
  } else if (req.url === '/profile.png' && req.method === 'GET') {
    //로그인 이미지 눌러서 넘어가기
    fs.readFile('profile.png', (err, data) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end('Error');
      } else {
        res.writeHead(200, { 'Content-Type': 'image/png' });
        res.end(data);
      }
    });
  } else if (req.url === '/login.html' && req.method === 'GET') {
    // login.html 파일 읽어서 응답 전송
    fs.readFile('login.html', (err, data) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end('Error');
      } else {
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end(data);
      }
    });
  } else {
    res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end('Not Found');
  }
});
server.listen(3000, () => {
  console.log('ServerOK!');
});
=======
//! 서버 만들기 
>>>>>>> heeeun1207/issue3
