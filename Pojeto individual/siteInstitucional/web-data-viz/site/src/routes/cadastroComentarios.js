var express = require("express");
var router = express.Router();

var cadastroComentarioController = require("../controllers/cadastroComentarioController");

router.get("/", function (req, res) {
    cadastroComentarioController.testar(req, res);
});

// router.get("/listar", function (req, res) {
//     cadastroComentarioController.listar(req, res);
// });

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrarComentario", function (req, res) {
    cadastroComentarioController.cadastrarComentario(req, res);
})

// router.post("/autenticarFuncionario", function (req, res) {
//     cadastroComentarioController.entrarFuncionario(req, res);
// });

module.exports = router;