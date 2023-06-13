var database = require("../database/config");   

function entrarLogin(email, senha){
    console.log ("ACESSEI O EMPRESA MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()")

    var instrucao  = `SELECT * FROM Usuario WHERE email = '${email}' and senha = '${senha}'`;
    return database.executar(instrucao);
}


module.exports = {
    entrarLogin,
};