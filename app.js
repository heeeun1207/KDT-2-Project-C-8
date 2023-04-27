const http = require('http');
const fs = require('fs');
const path = require('path');

const routes = {
  '/': { file: 'index.html', type: 'text/html; charset=utf-8' }, 
  //프로필 이미지  // error
  '/profile.png': { file: 'sub/profile.png', type: 'image/png' }, 
  //로그인 페이지  
  '/login.html': { file: 'sub/login.html', type: 'text/html; charset=utf-8' },
  //테스트 안내 페이지 
  '/testGuide.html': { file: 'sub/testpaper/testGuide.html', type: 'text/html; charset=utf-8' },
  //이벤트페이지 (마크업 아직 안함 )
  '/eventprac.html': { file: 'sub/eventprac.html', type: 'text/html; charset=utf-8' },
  //에코라이프 페이지
  '/ecoLife.html': { file: 'sub/ecoLifePage/ecoLife.html', type: 'text/html; charset=utf-8' },
  //에코라이프 JS
  '/ecoscript.js': { file: 'sub/ecoLifePage/ecoscript.js', type: 'text/javascript; charset=utf-8' },
  //에코라이프 CSS
  '/ecostyle.css': { file: 'sub/ecoLifePage/ecostyle.css', type: 'text/css; charset=utf-8' },
  //지킴이 신고 페이지
  '/tellerpage.html': { file: 'sub/tellerpage.html', type: 'text/html; charset=utf-8' },
  //추천 따봉 이미지 
  '/thunbup.png': { file: 'sub/thumbup.png', type: 'image/png' },
  //비추천 이미지 
  '/thunbdown.png': { file: 'sub/thumbdown.png', type: 'image/png' },
};

const handleResponse = (req, res, route) => {
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
};

const server = http.createServer((req, res) => {
  const route = routes[req.url];
  if (route && req.method === 'GET') {
    handleResponse(req, res, route);
  } else {
    res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end('Not Found');
  }
});

server.listen(3040, () => {
  console.log('Server3040');
});
