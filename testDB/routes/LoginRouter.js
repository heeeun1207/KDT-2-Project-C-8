const LoginCtrl = require("../LoginCrtl");
const router = require("express").Router();
router.route('/' ,(req, res) => {
    res.send('Hello World!');
  });
module.exports = router;
