const fs =require('fs')

const data = fs.readFileSync(path,'./database.json')
const conf =JSON.parse(data);
const mysql = require('mysql');

const connection = mysql.createConnection(config,{
  host:conf.host,
  user:conf.user,
  password:conf.password,
  port:conf.port,
  database:conf.database
})
connection.connect()
module.exports =connection
