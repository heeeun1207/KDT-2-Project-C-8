const LoginCtrl = require("../LoginCrtl.js");
const router = require("express").Router();
router.route('/' ,(req, res) => {
    res.send('Hello World!');
  });
module.exports = router;
