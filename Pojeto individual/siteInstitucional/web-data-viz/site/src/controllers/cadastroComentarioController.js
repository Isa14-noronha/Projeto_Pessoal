var cadastroComentariosModel = require("../models/cadastroComentariosModel");

var sessoes = [];

function testar(req, res){
    console.log("ENTRAMOS NA cadastroComentariosModel");
    res.json("Estamos funcionando");
}

// function listarFuncionario(req, res){
//     cadastroComentarioController.listarFuncionario()
//     .then(function (resultado){
//       if(resultado.length > 0){
//           res.status(200).json(resultado);
//       }
//       else{
//         res.status(204).send("Nenhum resultado de Funcionario encontrado!")
//       }
//     }).catch(
//         function(erro){
//             console.log(erro);
//             console.log("Houve um erro ao realizar a consulta! Erro:", erro.sqlMessage);
//             res.status(500).json(erro.sqlMessage);
//         }
//     );
// }

// function entrarFuncionario(req, res){
//     if(idFuncionario == undefined){
//         res.status(400).send("Seu idFuncionario está undefined!");
//     }
//     else{
//         cadastroComentarioController.entrarFuncionario(idFuncionario)
//         .then(
//             function(resultado){
//                 if (resultado.length == 1) {
//                     console.log(resultado);
//                     res.json(resultado[0]);
//                 } else if (resultado.length == 0) {
//                     res.status(403).send("Funcionário não encontrado");
//                 } else {
//                     res.status(403).send("Mais de um funcionário cadastrado com o mesmo ID!");
//                 }
//             }
//         ).catch(
//             function(erro){
//                 console.log(erro);
//                 console.log("\nHouve um erro entrar no Funcionário! Erro: ", erro.sqlMessage);
//                 res.status(500).json(erro.sqlMessage);
//             }
//         );
//     }
// }

function cadastrarComentario(req, res){
    var comentario = req.body.comentarioServer;

    if(comentario == undefined){
        res.status(400).send("O comentario está undefined!");
    }
    
    else{
        cadastroComentariosModel.cadastrarComentario(comentario)
        .then(
            function(resultado){
                res.json(resultado);
            }
        ).catch(
            function (erro){
                console.log(erro);
                console.log(
                    "\nHouve um erro ao realizar o cadastro! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );
    }

}

module.exports = {
    testar,
    cadastrarComentario
}