const connection = require('../db.config')

const LoginCtrl ={
  getLogin : async (req,res) => {
    connection.query('SELECT * FROM loginTest.Login', (error, rows) => {
      if(error) throw error;
      res.send(rows);
      
    })
  }
}
module.exports = LoginCtrl