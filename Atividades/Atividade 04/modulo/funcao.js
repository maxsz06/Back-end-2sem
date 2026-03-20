const infoEstados = require("./estados_cidades.js");

const qtdEstados = Number(infoEstados.listaDeEstados.estados.length);

function getListadeEstados() {
  let siglasUF = [];

  for (let i = 0; i < qtdEstados; i++) {
    siglasUF.push(infoEstados.listaDeEstados.estados[i].sigla);
  }
  return { siglasUF, qtdEstados };
}

function getDadosEstado(infoEstado) {
  for (let i = 0; i < qtdEstados; i++) {
    if (
      infoEstado.toUpperCase() == infoEstados.listaDeEstados.estados[i].sigla
    ) {
      let estadoEncontado = {
        "sigla: ": infoEstados.listaDeEstados.estados[i].sigla,
        "Nome: ": infoEstados.listaDeEstados.estados[i].nome,
        "Capital:": infoEstados.listaDeEstados.estados[i].capital,
        "Região:": infoEstados.listaDeEstados.estados[i].regiao,
      };

      return estadoEncontado;
    }
  }
  return false;
}

function getCapitalEstado(infoEstado) {
  for (let i = 0; i < qtdEstados; i++) {
    if (
      infoEstado == infoEstados.listaDeEstados.estados[i].sigla.toUpperCase()
    ) {
      let estadoEncontado = {
        uf: infoEstados.listaDeEstados.estados[i].sigla,
        descrição: infoEstados.listaDeEstados.estados[i].nome,
        Capital: infoEstados.listaDeEstados.estados[i].capital,
      };
      return estadoEncontado;
    }
  }
  return false;
}

function getEstadosRegiao(infoRegiao) {
  let estados = [];

  for (let i = 0; i < qtdEstados; i++) {
    if (infoRegiao.toUpperCase() ==infoEstados.listaDeEstados.estados[i].regiao.toUpperCase()){
      estados.push({
        "uf": infoEstados.listaDeEstados.estados[i].sigla,
        "descricao": infoEstados.listaDeEstados.estados[i].nome
      })
    }
  }
  let resultado = {
    "regiao:": infoRegiao,
    "estados:": estados
  }

  return resultado;
}


console.log(getEstadosRegiao("SUL"));
