const { listaDeEstados } = require("../../Atividades/Atividade 04/modulo/estados_cidades")
const infoEstados = require("./estados_cidades")
const qtdEstados = Number(infoEstados.listaDeEstados.estados.length)


function getListadeEstados(){

    let status = false

    let siglasUF = []

    infoEstados.listaDeEstados.estados.forEach(function(estado){
        siglasUF.push(estado.sigla)
    })
    status = true
    return {siglasUF,qtdEstados}

}

function getDadosEstado(infoEstado) {

    let estadoEncontrado = null  // null enquanto não achar
    let status = false

    infoEstados.listaDeEstados.estados.forEach(function(estado) {
        if (infoEstado.toUpperCase() == estado.sigla) {

            estadoEncontrado = {   // atribuição direta, sem .push()
                "sigla": estado.sigla,
                "nome": estado.nome,
                "capital": estado.capital,
                "regiao": estado.regiao
            }
            status = true
        }
    })

    return { status, dados: estadoEncontrado }  // retorna os dois juntos
}

function getCapitalEstado(infoEstado) {

    let status = false
    let estadoEncontrado = null  // corrigido: null em vez de {}

    infoEstados.listaDeEstados.estados.forEach(function(estado) {
        if (infoEstado.toUpperCase() == estado.sigla) {
            estadoEncontrado = {          // corrigido: atribuição direta, sem .push
                "uf": estado.sigla,
                "descricao": estado.nome,
                "capital": estado.capital,
            }
            status = true               // corrigido: status dentro do if
        }
    })

    return { status, dados: estadoEncontrado }
}


function getRegiao(infoRegiao) {

    let estados = []

    infoEstados.listaDeEstados.estados.forEach(function(estado) {
        if (infoRegiao.toUpperCase() == estado.regiao.toUpperCase()) {
            estados.push({
                "uf": estado.sigla,
                "descricao": estado.nome
            })
        }
    })

    let status = estados.length > 0   // true se achou pelo menos um estado

    let dados = {
        "regiao": infoRegiao,
        "estados": estados
    }

    return { status, dados }
}


function getCapitalPais() {

    let resultado = []

    infoEstados.listaDeEstados.estados.forEach(function(estado) {  // corrigido: infoEstados.listaDeEstados
        if (estado.capital_pais) {
            resultado.push({
                "capital_atual": estado.capital_pais.capital,
                "uf": estado.sigla,
                "descricao": estado.nome,                          // corrigido: tinha "descricao:" com : a mais
                "capital": estado.capital,
                "regiao": estado.regiao,
                "ano_inicio": estado.capital_pais.ano_inicio,
                "ano_fim": estado.capital_pais.ano_fim
            })
        }
    })

    let status = resultado.length > 0

    return { status, dados: resultado }
}


function getCidades(infoUf) {

    let cidades = []
    let resultado = null

    infoEstados.listaDeEstados.estados.forEach(function(estado) {
        if (infoUf.toUpperCase() == estado.sigla.toUpperCase()) {

            let qtdCidades = Number(estado.cidades.length)

            estado.cidades.forEach(function(nomeCidades) {
                cidades.push(nomeCidades.nome)
            })

            resultado = {                // corrigido: atribuição direta em vez de .push
                "uf": estado.sigla,
                "descricao": estado.nome,
                "quantidade_cidades": qtdCidades,
                "cidades": cidades
            }
        }
    })

    let status = resultado !== null   // true se achou o estado

    return { status, dados: resultado }
}

module.exports={

    getCidades,
    getDadosEstado,
    getCapitalEstado,
    getCapitalPais,
    getListadeEstados,
    getRegiao

}