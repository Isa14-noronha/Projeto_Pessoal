var express = require("express");
var router = express.Router();

var loginController = require("../controllers/loginController");

router.get("/", function (req, res) {
    loginController.testarLogin(req, res);
});


router.post("/entrarLogin", function (req, res) {
    loginController.entrarLogin(req, res);
});

module.exports = router;