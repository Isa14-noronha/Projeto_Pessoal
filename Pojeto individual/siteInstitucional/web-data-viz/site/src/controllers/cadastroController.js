var cadastroModel = require("../models/cadastroModel");

var sessoes = [];

function testar(req, res){
    console.log("ENTRAMOS NA cadastroModel");
    res.json("Estamos funcionando");
}

// function listarFuncionario(req, res){
//     cadastroModel.listarFuncionario()
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
//         cadastroModel.entrarFuncionario(idFuncionario)
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

function cadastrar(req, res){
    var email = req.body.emailServer;
    var nomeUsuario = req.body.nomeUsuarioServer;
    var senha = req.body.senhaServer;

    if(email == undefined){
        res.status(400).send("O email está undefined!");
    }
    else if(nomeUsuario == undefined){
        res.status(400).send("O nomeUsario está undefined!");
    }
    else if(senha == undefined){
        res.status(400).send("A senha está undefined!");
    }
    else{
        cadastroModel.cadastrar(email, nomeUsuario, senha)
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
    // listarFuncionario,
    cadastrar
    // entrarFuncionario

}