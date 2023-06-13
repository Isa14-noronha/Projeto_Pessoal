var database = require("../database/config");   

function qtdUsuarios(email, senha){
    console.log ("ACESSEI O EMPRESA MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()")

    var instrucao  = `SELECT count(idUsuario) as 'qtd_Usuario' FROM Usuario`;
    return database.executar(instrucao);
}


module.exports = {
    qtdUsuarios
};