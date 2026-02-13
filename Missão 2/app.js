/********************************************************
*  Objetivo: Criar uma calculadora com
            Soma,Subtração,Multiplicação e Divisão
*   Autor: Maxwillian   
*   Data 13/02/2026
*   Versão: 1.0
********************************************************/

const readLine = require('readline')

const entradaDeDados = readLine.createInterface({

    input: process.stdin,
    output: process.stdout

})


entradaDeDados.question('Digite o seu valor 1: ', function (setValorUm) {
    let valorUm = setValorUm

    entradaDeDados.question('Digite o seu valor 2:', function (setValorDois) {
        let valorDois = setValorDois


        console.log('Qual Operação a abaixo você deseja realizar?')
        console.log('------[ Soma - 1 ]------')
        console.log('----[Subtração - 2]-----')
        console.log('---[Multiplicação - 3]--')
        console.log('-----[Divisão - 4]------')
        entradaDeDados.question('Escolha um valor: ', function (setEscolhaUser) {


            let escolhaUser = setEscolhaUser
            let calculos = require('./modulo/calculos.js') // Import da biblioteca

            if (escolhaUser == 1) {

                let soma = calculos.calcularSoma(setValorUm,setValorDois)

                    if (soma){
                        console.log('')
                        console.log('')
                        console.log ('-------[Cálculos SA]-------')
                        console.log ('A Sua Soma de ' + valorUm + " + " + valorDois)
                        console.log ('O resultado da soma é: ' + soma)
                        console.log ('----------------------------')

                    }else{
                       // console.log("Erro ao Realizar o calculo!")
                            entradaDeDados.close()
                    }
                
            } else if (escolhaUser == 2) {

                let subtracao = calculos.calcularSubtracao(setValorUm,setValorDois)

                    if (subtracao){

                        console.log('')
                        console.log('')
                        console.log ('-------[Cálculos SA]-------')
                        console.log ('A Sua Subtração de ' + valorUm + " - " + valorDois)
                        console.log ('O resultado da soma é: ' + subtracao)
                        console.log ('----------------------------')

                    }

            } else if (escolhaUser == 3) {

                let multiplicacao = calculos.calcularMultiplicacao(setValorUm,setValorDois)    

                    if (multiplicacao){

                        console.log('')
                        console.log('')
                        console.log ('-------[Cálculos SA]-------')
                        console.log ('A Sua Multiplicação de ' + valorUm + " x " + valorDois)
                        console.log ('O resultado da Multiplicação é: ' + multiplicacao)
                        console.log ('----------------------------')

                    }


            } else if (escolhaUser == 4) {

                let divisao = calculos.calcularDivisao(setValorUm,setValorDois)

            } else {
                ('Erro: Opção Invalida')
            }




        }) // Fechamento Question 3
    })//Fechamento Question 2
}) // Fechamento Question 1