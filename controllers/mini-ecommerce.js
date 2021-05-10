const cidadesEstados = require("../cidades-estados.json");

function finalizarCompras(req, res) {
  console.log(req.body);
  res.send("ok");
}

function obterCidadesPorEstado(req, res) {
  const siglaEstado = req.params["siglaEstado"].toUpperCase();
  const dadosEstados = cidadesEstados.estados.filter(
    (estado) => estado.sigla === siglaEstado
  );
  if (dadosEstados.length === 0) {
    res.status(404).json({ erro: `${siglaEstado} não é um estado válido.` });
  }
  res.json(dadosEstados[0].cidades);
}

module.exports = {
  finalizarCompras,
};
