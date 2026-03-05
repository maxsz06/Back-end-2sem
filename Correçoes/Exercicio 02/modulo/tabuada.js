/*******************************************************************
 *Objetivo: Arquivo responsalvel por gerar a tabuada de um número
 * Data: 25/02/2026
 * Autor: Maxwillian
 * Versão: 1.0
 * ************************************************************** */

 const calculosMatematicos = require('./calcular.js')
 //Função para imprimir a tabuada usando While
const gerarTabuada = function(tabuada){
    let tab = Number(tabuada)
    let cont = 0
    let resultado 

    resultado = calculosMatematicos.multiplicar(tab,cont)
    
    //Repetição a função de multiplicar para realizar a operação
    while (cont<=10) {
        //chama a função de multiplicar para realizar a operação
        resultado=calculosMatematicos.multiplicar(tab,cont)
        console.log(`${tab} x ${cont} = ${resultado}`)
        
       // cont = cont +1
       //cont ++
       cont +=1
    }
}

const gerarTabuadaFor = function(tabuada){
    let tab = Number(tabuada)
    let resultado 

    resultado = calculosMatematicos.multiplicar(tab)
    
    //Repetição a função de multiplicar para realizar a operação
    for (let cont = 0; cont<=10; cont++) {
        //chama a função de multiplicar para realizar a operação
        resultado=calculosMatematicos.multiplicar(tab,cont)
        console.log(`${tab} x ${cont} = ${resultado}`)   
    }
}


gerarTabuadaFor(9)   