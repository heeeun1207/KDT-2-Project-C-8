const mysql = require('mysql');
const dbconfig = require('./dbconfig.json');

// MySQL 연결 정보
const connection = mysql.createConnection({
  host: dbconfig.host,
  user: dbconfig.user,
  password: dbconfig.password,
  database: dbconfig.database
});

// MySQL 연결
connection.connect((err) => {
  if (err) throw err;
  console.log('MySQL에 연결되었습니다.');
});

// SQL 쿼리 실행
connection.query('SELECT * FROM logintest2', (err, results, fields) => {
  if (err) throw err;
  console.log(results);
});

// MySQL 연결 종료
connection.end((err) => {
  if (err) throw err;
  console.log('MySQL 연결이 종료되었습니다.');
});
