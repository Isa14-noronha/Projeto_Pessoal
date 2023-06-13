var loginModel = require("../models/loginModel");

var sessoes = [];

function testarLogin(req, res) {
    console.log("ENTRAMOS NA loginModel");
    res.json("ESTAMOS FUNCIONANDO!");
}

// function listarLoginTabela(req, res) {
//     loginModel.listarlogin()
//         .then(function (resultado) {
//             if (resultado.length > 0) {
//                 res.status(200).json(resultado);
//             } else {
//                 res.status(204).send("Nenhum resultado encontrado!")
//             }
//         }).catch(
//             function (erro) {
//                 console.log(erro);
//                 console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
//                 res.status(500).json(erro.sqlMessage);
//             }
//         );
// }

// function listarUltimoIdLoginTabela(req, res){
//     loginModel.listarUltimoIdLoginTabela()
//     .then(function (resultado){
//         if(resultado.length > 0){
//             res.status(200).json(resultado);
//         }else{
//             res.status(204).send("Nenhum resultado encontrado!")
//         }
//     }).catch(
//         function (erro){
//             console.log(erro);
//             console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
//             res.status(500).json(erro.sqlMessage);
//         }
//     )
// }

function entrarLogin(req, res) {
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está undefined!");
    } else {
        
        loginModel.entrarLogin(email, senha)
            .then(
                function (resultado) {
                    console.log(`\nResultados encontrados: ${resultado.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultado)}`); // transforma JSON em String

                    if (resultado.length == 1) {
                        console.log(resultado);
                        res.json(resultado[0]);
                    } else if (resultado.length == 0) {
                        res.status(403).send("Email e/ou senha inválido(s)");
                    } else {
                        res.status(403).send("Mais de um usuário com o mesmo login e senha!");
                    }
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

module.exports = {
    entrarLogin,
    testarLogin
}