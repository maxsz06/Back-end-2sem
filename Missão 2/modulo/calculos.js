/****************************** 
* Ojetivo: Arquivo responsavel pelas funções de 
  Calculos para este projeto
* Autor: Max
* Data 13/02/2026
* Versão: 1.0
* ****************************/


function calcularSoma(setValorUm, setValorDois) {

  let tratarDado = require('./tratamento')

  let valorUm = Number(setValorUm.replace(",", "."))
  let valorDois = Number(setValorDois.replace(",", "."))


  let realizarOperacao = tratarDado.tratarDados(valorUm, valorDois)


  soma = valorUm + valorDois
  return Number(soma)

}

function calcularSubtracao(setValorUm, setValorDois) {

  let tratarDado = require('./tratamento')

  let valorUm = Number(setValorUm.replace(",", "."))
  let valorDois = Number(setValorDois.replace(",", "."))

  let realizarOperacao = tratarDado.tratarDados(valorUm.valorDois)

  subtracao = valorUm-valorDois

  return Number(subtracao)
}

function calcularMultiplicacao(setValorUm,setValorDois){

  let tratarDado = require('./tratamento')
  let valorUm = Number(setValorUm.replace(",", "."))
  let valorDois = Number(setValorDois.replace(",", "."))
  let realizarOperacao = tratarDado.tratarDados(valorUm.valorDois)

  multiplicacao = valorUm*valorDois

  return Number(multiplicacao)
}

function calcularDivisao(setValorUm,valorDois){

  let tratarDado = require('./tratamento')
  let valorUm = Number(setValorUm.replace(",", "."))
  let valorDois = Number(setValorDois.replace(",", "."))
  let realizarOperacao = tratarDado.tratarDados(valorUm.valorDois)

  divisao = valorUm/valorDois

}


module.exports = {

  calcularSoma,
  calcularSubtracao,
  calcularMultiplicacao,
  calcularDivisao
}