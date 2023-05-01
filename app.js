const http = require('http');
const fs = require('fs');
const path = require('path');

const routes = {
  '/': { file: 'index.html', type: 'text/html; charset=utf-8' },
  '/profile.png': { file: 'sub/img/profile.png', type: 'image/png' },
  //로그인 화면 
  '/login.html': { file: 'sub/Login/login.html', type: 'text/html; charset=utf-8' },
  //지킴이 테스트 첫화면 (안내 페이지)
  '/testGuide.html': { file: 'sub/testpaper/testGuide.html', type: 'text/html; charset=utf-8' },
  '/testpage.html': { file: 'sub/testpaper/testpage.html', type: 'text/html; charset=utf-8' },
  //이벤트 & 소식페이지 
  '/eventprac.html': { file: 'sub/News/eventprac.html', type: 'text/html; charset=utf-8' },
  //친환경 라이프페이지 
  '/ecoLife.html': { file: 'sub/ecoLifePage/ecoLife.html', type: 'text/html; charset=utf-8' },
  '/ecoscript.js': { file: 'sub/ecoLifePage/ecoscript.js', type: 'text/javascript; charset=utf-8' },
  '/ecostyle.css': { file: 'sub/ecoLifePage/ecostyle.css', type: 'text/css; charset=utf-8' },
  //신고하는 지킴이페이지 
  '/tellerpage.html': { file: 'sub/tellerpage/tellerpage.html', type: 'text/html; charset=utf-8' },
  '/thumbup.png': { file: 'sub/img/thumbup.png', type: 'image/png' },
  '/thumbdown.png': { file: 'sub/img/thumbdown.png', type: 'image/png' },
};

const handleResponse = (req, res) => {
  const route = routes[req.url];
  if (route && req.method === 'GET') {
    const fullPath = path.join(__dirname, route.file);
    fs.readFile(fullPath, (err, data) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end('Error');
      } else {
        res.writeHead(200, { 'Content-Type': route.type });
        res.end(data);
      }
    });
  } else {
    res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end('Not Found');
  }
};

const server = http.createServer(handleResponse);

server.listen(3000, () => {
  console.log('Server3000');
});
