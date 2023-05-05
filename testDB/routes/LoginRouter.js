const LoginCtrl = require("../controllers/LoginCtrl");
const router = require("express").Router;
router.route('/')
  .get(LoginCtrl.getLogin)

module.exports = router;
