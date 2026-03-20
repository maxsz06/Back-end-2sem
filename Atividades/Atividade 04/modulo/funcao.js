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
  let estados = []

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

function getCapitalPais(){
  let resultado = []

    for(let i = 0; i<qtdEstados; i++){
      if(infoEstados.listaDeEstados.estados[i].capital_pais){
        resultado.push({
            
           capital_atual: infoEstados.listaDeEstados.estados[i].capital_pais.capital,
           uf: infoEstados.listaDeEstados.estados[i].sigla,
           descricao: infoEstados.listaDeEstados.estados[i].nome,
           capital: infoEstados.listaDeEstados.estados[i].capital,
           regiao: infoEstados.listaDeEstados.estados[i].regiao,
           ano_inicio: infoEstados.listaDeEstados.estados[i].capital_pais.ano_inicio,
           ano_fim: infoEstados.listaDeEstados.estados[i].capital_pais.ano_fim,

        })
      }
    }
    return resultado

}

function getCidades(infoUF){

  let cidades = []
  let resultado= []


  for (let i = 0; i < qtdEstados; i ++){ // Responsavel por percorrer todos os estados (27 Estados)
    if((infoUF.toUpperCase() ==infoEstados.listaDeEstados.estados[i].sigla.toUpperCase())){ // Verefica se a sigla do estado bate com a entrada do usuario

      let qtdCidades = Number(infoEstados.listaDeEstados.estados[i].cidades.length) // Pega a quantidade de cidades

      for (let j = 0; j <qtdCidades; j++){ // percorre a lista de cidades dentro do estado 
        cidades.push(infoEstados.listaDeEstados.estados[i].cidades[j].nome) // pega o array vazio e preen
      }
      
          resultado.push({

            uf: infoEstados.listaDeEstados.estados[i].sigla,
            descricao: infoEstados.listaDeEstados.estados[i].nome,
            quantidade_cidades: qtdCidades,
            cidades: cidades
       })
    }
  }
  return resultado
}

console.log(getCidades('GH'))

