//entry point of the application 
//src 디렉토리에서 작업 & 연산되는 모든 작업은 app.js에서 관리한다. 

const http = require('http');
const fs = require('fs');
const path = require('path');

const routes = {
  '/': { file: 'assets/css/index/index.html', type: 'text/html; charset=utf-8' },
  '/': { file: 'assets/css/index/index.css', type: 'text/css; charset=utf-8' }, 
  '/': { file: 'assets/js/index.js', type: 'text/javascript' }, 
  '/profile.png': { file: 'assets/images/profile.png', type: 'image/png' },
  '/homegreen.png': { file: 'assets/images/homegreen.png', type: 'image/png' },
  '/us.png': { file: 'assets/images/us.png', type: 'image/png' },
  //로그인 화면 
  '/login.html': { file: 'assets/css/Login/login.html', type: 'text/html; charset=utf-8' },
  '/Login.css': { file: 'assets/css/Login/Login.css', type: 'text/css; charset=utf-8' },
  //마이페이지 
  '/mypage.html': { file: 'assets/css/mypage/mypage.html', type: 'text/html; charset=utf-8' },
  '/mypage.css': { file: 'assets/css/mypage/mypage.css', type: 'text/css; charset=utf-8' },
  //지킴이 테스트 첫화면 (안내 페이지)
  '/testGuide.html': { file: 'assets/css/testpaper/testGuide.html', type: 'text/html; charset=utf-8' },
  '/testGuide.css': { file: 'assets/css/testpaper/testGuide.css', type: 'text/css; charset=utf-8' },
  '/testGuide.js': { file: 'assets/js/testGuide.js', type: 'text/javascript ; charset=utf-8' },
  //테스트 시험지 페이지 
  '/test.html': { file: 'assets/css/testpaper/test.html', type: 'text/html; charset=utf-8' },
  '/test.css': { file: 'assets/css/testpaper/test.css', type: 'text/css; charset=utf-8' },
  '/test.js': { file: 'assets/js/test.js', type: 'text/javascript; charset=utf-8' },
  '/x-symbol.png': { file: 'assets/images/x-symbol.png', type: 'image/png' },
  //이벤트 & 소식페이지 
  '/eventpage.html': { file: 'assets/css/News/eventpage.html', type: 'text/html; charset=utf-8' },
  '/eventpage.css': { file: 'assets/css/News/eventpage.css', type: 'text/css; charset=utf-8' },
  //친환경 라이프페이지 
  '/ecoLife.html': { file: 'assets/css/ecoLifePage/ecoLife.html', type: 'text/html; charset=utf-8' },
  '/ecostyle.css': { file: 'assets/css/ecoLifePage/ecostyle.css', type: 'text/css; charset=utf-8' },
  '/ecoscript.js': { file: 'assets/js/ecoscript.js', type: 'text/javascript; charset=utf-8' },
  //신고하는 지킴이페이지 
  '/tellerpage.html': { file: 'assets/css/tellerpage/tellerpage.html', type: 'text/html; charset=utf-8' },
  '/tellerpage.css': { file: 'assets/css/tellerpage/tellerpage.css', type: 'text/html; charset=utf-8' },
  '/tellerpage.js': { file: 'assets/js/tellerpage.js', type: 'text/javascript; charset=utf-8' },
  '/thumbup.png': { file: 'assets/images/thumbup.png', type: 'image/png' },
  '/thumbdown.png': { file: 'assets/images/thumbdown.png', type: 'image/png' },
  //FAQ 페이지 
  '/FAQpage.html': { file: 'assets/css/FAQ/FAQpage.html', type: 'text/html; charset=utf-8' },
  '/FAQpage.css': { file: 'assets/css/FAQ/FAQpage.css', type: 'text/css; charset=utf-8' },
  '/FAQpage.js': { file: 'assets/js/FAQpage.js', type: 'text/jcssavascript; charset=utf-8' },
  //공지사항 페이지 
  '/Noticepage.html': { file: 'assets/css/Notice/NoticePage.html', type: 'text/html; charset=utf-8' },
  '/NoticePage.css': { file: 'assets/css/Notice/NoticePage.css', type: 'text/css; charset=utf-8' },
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
