const { listaDeEstados } = require("../../Atividades/Atividade 04/modulo/estados_cidades")
const infoEstados = require("./estados_cidades")
const qtdEstados = Number(infoEstados.listaDeEstados.estados.length)


function getListadeEstados(){

    let siglasUF = []

    infoEstados.listaDeEstados.estados.forEach(function(estado){
        siglasUF.push(estado.sigla)
    })
    return {siglasUF,qtdEstados}

}

function getDadosEstado(infoEstado){

    let estadoEncontado = {}
    let status = false

    infoEstados.listaDeEstados.estados.forEach(function(estado){
        if(infoEstado.toUpperCase() == estado.sigla){

            estadoEncontado.push = {
                "sigla": estado.sigla,
                "nome": estado.nome,
                "capital": estado.capital,
                "regiao": estado.regiao
            }
            status = true
        }
    })
        return estadoEncontado
}

function getCapitalEstado(infoEstado){

    let estadoEncontado={}

    infoEstados.listaDeEstados.estados.forEach(function(estado){
        if(infoEstado.toUpperCase()== estado.sigla){
            estadoEncontado.push={
                "uf": estado.sigla,
                "descricao": estado.nome,
                "capital": estado.capital,
            }
        }
    })
    return estadoEncontado
}

function getRegiao(infoRegiao) {

    let estados = []

    infoEstados.listaDeEstados.estados.forEach(function(estado){
        if(infoRegiao.toUpperCase() == estado.regiao.toUpperCase()){
          estados.push({
            "uf": estado.sigla,
            "descricao": estado.nome
          })
        }
    })
    let resultado = {
        "regiao": infoRegiao,
        "estados": estados
    }
    return resultado
  }

function getCapitalPais(){
    let resultado = []

    listaDeEstados.estados.forEach(function(estado){
        if (estado.capital_pais){
        resultado.push({
            "capital_atual": estado.capital_pais.capital, //! Este objeto tem guardado em estados especificos retorna (true/false)
            "uf": estado.sigla,
            "descricao:": estado.nome,
            "capital": estado.capital,
            "regiao": estado.regiao,
            "ano_inicio": estado.capital_pais.ano_inicio, 
            "ano_fim": estado.capital_pais.ano_fim
        })
        }
    })
    return resultado
}

function getCidades(infoUf){

    let cidades=[]
    let resultado = []

    infoEstados.listaDeEstados.estados.forEach(function(estado){ //! Percorre o array para procuarar a sigla digitada
        if(infoUf.toUpperCase() == estado.sigla.toUpperCase()){  //! Se achar entra no fluxo 

            let qtdCidades = Number(estado.cidades.length) //! Pega a quantidade de objetos que tem dentro da sigla "estado->cidades(quantidade)"

           estado.cidades.forEach(function(nomeCidades){ //! Repetição para percorrer o objeto do array de cidades
             cidades.push(nomeCidades.nome)   //! Pega todos os atributos do objeto e guarda no array vazio
            })
             resultado.push({  //! pega as informações que vão sair como resultado
                 "uf": estado.sigla,
                 "descricao": estado.nome,
                 "quantidade_cidades": qtdCidades,
                 "cidades": cidades //! este objeto vai mostrar todos os nomes por causa da estrutura de repetição que tem
                })
        }
    })

    return resultado
}

module.exports={

    getCidades,
    getDadosEstado,
    getCapitalEstado,
    getCapitalPais,
    getListadeEstados,
    getRegiao

}