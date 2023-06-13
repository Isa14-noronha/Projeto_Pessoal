var database = require("../database/config");

function selecionarInstrumentos() {

    intrucao = `SELECT sum(violino) AS violino, SUM(violao) AS violao, sum(guitarra) AS guitarra, sum(bateria) AS bateria,
    sum(piano) AS piano, sum(outros) AS outros FROM Instrumentos;`;

    console.log("Executando a instrução SQL: \n" + intrucao);
    return database.executar(intrucao);
}

module.exports = {
    selecionarInstrumentos
}
