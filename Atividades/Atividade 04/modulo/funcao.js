const infoEstados = require('./estados_cidades.js')


function getListadeEstados(){

    let qtdEstados = Number(infoEstados.listaDeEstados.estados.length)
    let siglasUF = []

  for(let i = 0; i< qtdEstados; i++){
    siglasUF.push(infoEstados.listaDeEstados.estados[i].sigla)
  }
   console.log(siglasUF)
   console.log (`quantidade: ${qtdEstados}`)
}


function getDadosEstado(){

let estadoName = 'Sao Paulo'

 if(estadoName == infoEstados.listaDeEstados) 

}

getListadeEstados()