var express = require("express");
var router = express.Router();

var graficoUsuarioController = require("../controllers/graficoUsuarioController");

router.get("/", function (req, res) {
    graficoUsuarioController.testarGrafico(req, res);
});


router.get("/qtdUsuarios", function (req, res) {
    graficoUsuarioController.qtdUsuarios(req, res);
});

module.exports = router;