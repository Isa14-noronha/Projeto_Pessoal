var database = require("../database/config")

// function entrarFuncionario(idFuncionario){
//     console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", email, senha)
//     var instrucao = `
//     SELECT * FROM Funcionarios WHERE idFuncionario = '${idFuncionario}';
//     `
//     return database.executar(instrucao);
// }

function cadastrar(email, nomeUsuario, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():email, nomeUsuario, senha");
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao = `
        INSERT INTO Usuario (nomeUsuario, email, senha) VALUES ( '${nomeUsuario}', '${email}', '${senha}')`; 
    return database.executar(instrucao);
}

module.exports = {
    // entrarFuncionario,
    cadastrar
};