const connection = require('./db.config')

const LoginCtrl ={
  getLogin : async (req,res) => {
    connection.query('SELECT id FROM logintest2.logintest2', (error, rows) => {
      if(error) throw error;
      console.log(rows);
      res.send(rows);
      
    })
  }
}
module.exports = LoginCtrl