var express = require("express");
var router = express.Router();

var cadastroController = require("../controllers/cadastroController");

router.get("/", function (req, res) {
    cadastroController.testar(req, res);
});

// router.get("/listar", function (req, res) {
//     cadastroController.listar(req, res);
// });

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar", function (req, res) {
    cadastroController.cadastrar(req, res);
})

// router.post("/autenticarFuncionario", function (req, res) {
//     cadastroController.entrarFuncionario(req, res);
// });

module.exports = router;