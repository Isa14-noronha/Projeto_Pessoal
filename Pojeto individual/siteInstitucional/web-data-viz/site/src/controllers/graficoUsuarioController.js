var graficoUsuarioModel = require("../models/graficoUsuarioModel");

var sessoes = [];

function testarGrafico(req, res) {
    console.log("ENTRAMOS NA graficoUsuario");
    res.json("ESTAMOS FUNCIONANDO!");
}

// function listarLoginTabela(req, res) {
//     graficoUsuario.listarlogin()
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
//     graficoUsuario.listarUltimoIdLoginTabela()
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

function qtdUsuarios(req, res) {
    console.log("Dentro da controller")
        
        graficoUsuarioModel.qtdUsuarios()
            .then(
                function (resultado) {
                    res.json(resultado);
                
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar o login! Erro: em biscar a qtd de usuarios", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }


module.exports = {
    qtdUsuarios,
    testarGrafico
}