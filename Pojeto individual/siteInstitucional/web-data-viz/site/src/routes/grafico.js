var express = require("express");
var router = express.Router();

var graficoController = require("../controllers/graficoController");

router.get('/selecionarInstrumentos', function (req, res) {
    graficoController.selecionarInstrumentos(req, res);
});

module.exports = router;