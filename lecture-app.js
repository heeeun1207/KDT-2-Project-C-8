/**
 * ! import 
 * * 1. http
 * * 2. fs
 * 
 * */

const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  /**
   * ! GET 요청 부분
   */

  if(req.method === "GET") {

    function responsePage(requestURL, readFileData) {
      if(req.url === requestURL) {
        fs.readFile(readFileData, (err, data) => {
          if (err) {
            res.writeHead(500, { 'Content-Type': 'text/html; charset=utf-8' });
            res.end('Error');
          } else {
            res.writeHead(200, { 'Content-Type': 'image/png' });
            res.end(data);
          }
        });
      }
    }

    responsePage("/","./index.html");
    responsePage("/profile.png","sub/profile.png");
    /**
     * * 서버사이드에서 필연히 발생하는 여러 응답처리를 위와같이
     * * 함수로 래핑하고 처리하면 코드가 훨씬 깔끔해진다.
     */

    



  }

});