/*****************************************************************************
 * Objetivo: Arquivo responsavel pela entrada e saída de dados da aplicação
 * Data: 20/02/2026
 * Autor: Maxwillian
 * Versão: 1.0
 *****************************************************************************/

const calculosMatematicos = require('./modulo/calcular.js')

let resposta = calculosMatematicos.calcular(10,60,'multiplicar')


console.log(resposta)
