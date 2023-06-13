var graficoModel = require("../models/graficoModel");

function selecionarInstrumentos(req, res) {

  graficoModel.selecionarInstrumentos().then((resultado) => {
    if (resultado.length > 0) {
      res.status(200).json(resultado);
    } else {
      res.status(204).json([]);
    }
  }).catch(function (erro) {
    console.log(erro);
    console.log("Houve um erro ao buscar os aquarios: ", erro.sqlMessage);
    res.status(500).json(erro.sqlMessage);
  });
}

module.exports = {
  selecionarInstrumentos,
}