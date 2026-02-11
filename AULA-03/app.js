/********************************************************
*  Objetivo: Criar um sistema que permite o calculo de juros
*  utilizando boas praticas com funções
*   Autor: Maxwillian   
*   Data 11/02/2026
*   Versão: 1.0
********************************************************/



const readLine = require('readline')

const entradaDeDados = readLine.createInterface({

    input: process.stdin,
    output: process.stdout

})

entradaDeDados.question('Digite o Nome do cliente: ', function (setNome) {
    let nome = setNome

    entradaDeDados.question('Nome do Produto: ', function (setProduto) {
        let produto = setProduto

        entradaDeDados.question('Digite o Valor da compra: ', function (capitalProduto) {
            let capital = capitalProduto

            entradaDeDados.question('Digite a taxa de juros a ser aplicada na compra: ', function (taxaCompra) {
                let juros = taxaCompra

                entradaDeDados.question('Digite o tempo para realizar o pagameto: ', function (setTempo) {
                    let tempoPagamento = setTempo

                    //Import da biblioteca que realiza calculos 
                    let calculos = require('./modulo/calculos.js')

                    // calculos.calcular "Muito importante para Fazer a importação de outra função para obter a biblioteca"
                    let montante = calculos.calcularJurosCompostos(capitalProduto, taxaCompra, setTempo)

                    if (montante){   
                        console.log('O montante final é: ' + montante.toFixed(2))
                    }else{
                        console.log('ERRO: Devido a poblemas no calculo de juros, o programa encerrou.')
                        entradaDeDados.close()
                        
                    }

                })// Fechamento 5
            }) // Fechamento 4
        }) // Fechamento 3
    })// Fechamento  2 
}) // Fechamento 1

//Criando uma função para calcular o valor da compra parcelada
//Metodo tradicional de criar uma função

