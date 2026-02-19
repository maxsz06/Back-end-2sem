/**********************
 *  Objetivo: Classe responsaver por
 *              Receber dados do Usuario
 * Autor : Maxwillian Santana / Git: Max06  
 * Data 14/02/2026
 * 
 * 
**********************/

const readLine = require('readline')

const entradaDeDados = readLine.createInterface({

    input: process.stdin,
    output: process.stdout

})


entradaDeDados.question('Digite o seu Valor 1: ', function (setValorUm) {
    let valorUm = setValorUm

    entradaDeDados.question('Digite o seu Valor 2:', function (setValorDois) {
        let valorDois = setValorDois

        let tratamento = require('./model/tratamento.js')
        let tratar = tratamento.tratarValores(setValorUm, setValorDois)

        console.log('Qual Operação você deseja realizar?')
        console.log('---[SOMA - 1 ]---')
        console.log('---[SUBTRACAO - 2 ]---')
        console.log('---[MULTIPLICACAO - 3 ]---')
        console.log('---[DIVISAO - 4 ]---')

        entradaDeDados.question('Escolha A Operação: ', function (setEscolhaUser) {
            let escolhaUser = setEscolhaUser
            escolhaUser = Number(escolhaUser)

            let tratamento = require('./model/tratamento.js')
            let tratar = tratamento.tratarValores(valorUm, valorDois)

            let realizarOperacao = require('./model/calculos.js')

            if (escolhaUser == 1) {  // Calculo Soma 

                let soma = realizarOperacao.calcularAdicao(valorUm, valorDois)

                console.log('===================')
                console.log('O seu valor: ' + valorUm + ' sera somado com: ' + valorDois)
                console.log('O resultado da soma é: ' + soma.toFixed(2))
                console.log('===================')


            } else if (escolhaUser == 2) { // calculo subtração

                let subtracao = realizarOperacao.calcularSubtracao(valorUm, valorDois)

                console.log('===================')
                console.log('O seu minutendo: ' + valorUm)
                console.log('O seu subtraendo: ' + valorDois)
                console.log('O resultado da diferença é: ' + subtracao.toFixed(2))
                console.log('===================')


            } else if (escolhaUser == 3) { // calculo multiplicacao

                let multiplicacao = realizarOperacao.calcularMultplicacao(valorUm, valorDois)

                console.log('===================')
                console.log('O seu Fator Um: ' + valorUm)
                console.log('O seu Fator Dois: ' + valorDois)
                console.log('O resultado do Produto é: ' + multiplicacao.toFixed(2))
                console.log('===================')


            } else if (escolhaUser == 4) { // calcular divisão

                let divisao = realizarOperacao.calcularDivisao(valorUm, valorDois)

                console.log('===================')
                console.log('Dividendo: ' + valorUm)
                console.log('Divisor: ' + valorDois)
                console.log('O resultado do Quociente é: ' + divisao.toFixed(2))
                console.log('===================')

            }


        })//Fechamento Tres
    })//Fechamento Dois
})//Fechamento Um

