const http = require('http');
const fs = require('fs');
const path = require('path');
const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'LoginDB',
});
connection.connect((error) => {
  if (error) {
    console.error('Database connection failed: ' + error.stack);
    return;
  }
  console.log('Connected to database.');
});

const routes = {
  
  '/': { file: '/index.html', type: 'text/html; charset=utf-8' },
  '/us.png': { file: 'assets/images/us.png', type: 'image/png' },
  '/profile.png': { file: 'assets/images/profile.png', type: 'image/png' },
  '/homegreen.png': { file: 'assets/images/homegreen.png', type: 'image/png' },
  '/home.png': { file: 'assets/images/home.png', type: 'image/png' },
   //에코라이프 아이콘
  '/milk-carton.png': { file: 'assets/images/EcoLife/milk-carton.png', type: 'image/png' },
  '/pot.png': { file: 'assets/images/EcoLife/pot.png', type: 'image/png' },
  '/therm.png': { file: 'assets/images/EcoLife/therm.png', type: 'image/png' },
  '/bath-scrubber.png': { file: 'assets/images/EcoLife/bath-scrubber.png', type: 'image/png' },
  '/plastic-recycling.png': { file: 'assets/images/EcoLife/plastic-recycling.png', type: 'image/png' },
  '/shopping-bag.png': { file: 'assets/images/EcoLife/shopping-bag.png', type: 'image/png' },
  '/box.png': { file: 'assets/images/EcoLife/box.png', type: 'image/png' },
  '/service.png': { file: 'assets/images/EcoLife/service.png', type: 'image/png' },
  //mainpage 
  '/nature.png': { file: 'assets/images/nature.png', type: 'image/png' },
  '/earthdaynote.png': { file: 'assets/images/earthdaynote.png', type: 'image/png' },
  '/earthday1.png': { file: 'assets/images/earthday1.png', type: 'image/png' },
  '/earthday.png': { file: 'assets/images/main/earthday.png', type: 'image/png' },
  '/plogging.png': { file: 'assets/images/main/plogging.png', type: 'image/png' },
  '/contamination.png': { file: 'assets/images/main/contamination.png', type: 'image/png' },
  '/question.png': { file: 'assets/images/main/question.png', type: 'image/png' },
  '/sakura.png': { file: 'assets/images/main/sakura.png', type: 'image/png' },
  '/sakura2.png': { file: 'assets/images/main/sakura2.png', type: 'image/png' },
  '/treeview.png': { file: 'assets/images/main/treeview.png', type: 'image/png' },
  '/tree3.png': { file: 'assets/images/main/tree3.png', type: 'image/png' },
  '/ecoLife.png': { file: 'assets/images/main/ecoLife.png', type: 'image/png' },
  '/noticeboard.png': { file: 'assets/images/main/noticeboard.png', type: 'image/png' },
  '/test.png': { file: 'assets/images/main/test.png', type: 'image/png' },
  '/user.png': { file: 'assets/images/main/user.png', type: 'image/png' },
  //로그인 화면 
  '/login.html': { file: 'views/login.html', type: 'text/html; charset=utf-8' },
  '/Login.css': { file: 'assets/css/Login/Login.css', type: 'text/css; charset=utf-8' },
  //마이페이지 
  '/mypage.html': { file: 'views/mypage.html', type: 'text/html; charset=utf-8' },
  '/mypage.css': { file: 'assets/css/mypage/mypage.css', type: 'text/css; charset=utf-8' },
  //지킴이 테스트 첫화면 (안내 페이지)
  '/testGuide.html': { file: 'views/testGuide.html', type: 'text/html; charset=utf-8' },
  '/testGuide.css': { file: 'assets/css/testpaper/testGuide.css', type: 'text/css; charset=utf-8' },
  '/testGuide.js': { file: 'assets/js/testGuide.js', type: 'text/javascript ; charset=utf-8' },
  //테스트 시험지 페이지 
  '/test.html': { file: 'views/test.html', type: 'text/html; charset=utf-8' },
  '/test.css': { file: 'assets/css/testpaper/test.css', type: 'text/css; charset=utf-8' },
  '/test.js': { file: 'assets/js/test.js', type: 'text/javascript; charset=utf-8' },
  '/x-symbol.png': { file: 'assets/images/x-symbol.png', type: 'image/png' },
  //이벤트 & 소식페이지 
  '/eventpage.html': { file: 'views/eventpage.html', type: 'text/html; charset=utf-8' },
  '/eventpage.css': { file: 'assets/css/News/eventpage.css', type: 'text/css; charset=utf-8' },
  //친환경 라이프페이지 
  '/ecoLife.html': { file: 'views/ecoLife.html', type: 'text/html; charset=utf-8' },
  '/ecostyle.css': { file: 'assets/css/ecoLifePage/ecostyle.css', type: 'text/css; charset=utf-8' },
  '/ecoscript.js': { file: 'assets/js/ecoscript.js', type: 'text/jcssavascript; charset=utf-8' },
  //신고하는 지킴이페이지 
  '/trash.png': { file: 'assets/images/trash.png', type: 'image/png' },
  '/tellerpage.html': { file: 'views/tellerpage.html', type: 'text/html; charset=utf-8' },
  '/tellerpage.css': { file: 'assets/css/tellerpage/tellerpage.css', type: 'text/css; charset=utf-8' },
  '/tellerpage.js': { file: 'assets/js/tellerpage.js', type: 'text/javascript; charset=utf-8' },
  '/thumbup.png': { file: 'assets/images/thumbup.png', type: 'image/png' },
  '/thumbdown.png': { file: 'assets/images/thumbdown.png', type: 'image/png' },
  //FAQ 페이지 
  '/FAQpage.html': { file: 'views/FAQpage.html', type: 'text/html; charset=utf-8' },
  '/FAQpage.css': { file: 'assets/css/FAQ/FAQpage.css', type: 'text/css; charset=utf-8' },
  '/FAQpage.js': { file: 'assets/js/FAQpage.js', type: 'text/javascript; charset=utf-8' },
  //공지사항 페이지 
  '/NoticePage.html': { file: 'views/NoticePage.html', type: 'text/html; charset=utf-8' },
  '/NoticePage.css': { file: 'assets/css/Notice/NoticePage.css', type: 'text/css; charset=utf-8' },
  '/NoticePage.js': { file: 'assets/js/NoticePage.js', type: 'text/javascript; charset=utf-8' },
};

const handleResponse = (request, response) => {
  const url = request.url;
  const method = request.method;

  if (url === '/') {
    response.write('<html>');
    response.write('<head><title>Enter Message</title></head>');
    response.write(
      '<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>'
    );
    response.write('</html>');
    return response.end();
  }

  if (url === '/message' && method === 'POST') {
    const body = [];
    request.on('data', (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });
    request.on('end', () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split('=')[1];
      connection.query(
        'INSERT INTO messages (message) VALUES (?)',
        [message],
        (error, result) => {
          if (error) {
            console.error(error.stack);
            response.statusCode = 500;
            response.setHeader('Content-Type', 'text/plain');
            response.write('Error: ' + error.stack);
            return response.end();
          }
          console.log('Message saved to database: ' + message);
          response.statusCode = 302;
          response.setHeader('Location', '/');
          return response.end();
        }
      );
    });
  }

  if (url === '/messages' && method === 'GET') {
    connection.query('SELECT * FROM messages', (error, results) => {
      if (error) {
        console.error(error.stack);
        response.statusCode = 500;
        response.setHeader('Content-Type', 'text/plain');
        response.write('Error: ' + error.stack);
        return response.end();
      }
      response.statusCode = 200;
      response.setHeader('Content-Type', 'text/html');
      response.write('<html>');
      response.write('<head><title>Messages</title></head>');
      response.write('<body><ul>');
      results.forEach((result) => {
        response.write('<li>' + result.message + '</li>');
      });
      response.write('</ul></body>');
      response.write('</html>');
      return response.end();
    });
  }

  response.setHeader('Content-Type', 'text/html');
  response.write('<html>');
  response.write('<head><title>My First Page</title></head>');
  response.write('<body><h1>Hello, World!</h1></body>');
  response.write('</html>');
  return response.end();
};

const server = http.createServer((request, response) => {
const url = request.url;
const route = routes[url];
if (route) {
const file = route.file;
const type = route.type;
const filePath = path.join(__dirname, file);
fs.readFile(filePath, (error, content) => {
if (error) {
console.error(error.stack);
response.statusCode = 500;
response.setHeader('Content-Type', 'text/plain');
response.write('Error: ' + error.stack);
return response.end();
}
response.statusCode = 200;
response.setHeader('Content-Type', type);
response.write(content);
return response.end();
});
} else {
handleResponse(request, response);
}
});

server.listen(3000, () => {
console.log('Server 3000');
});
