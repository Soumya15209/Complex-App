var express = require("express");
var router = express.Router();
var userController = require("./controllers/userController");

router.get('/', userController.home);
router.post('/register', userController.register);

module.exports = router;