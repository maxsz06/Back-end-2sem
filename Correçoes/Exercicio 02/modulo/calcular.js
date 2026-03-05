/***************************************************************************************************************
 * Objetivo: Arquivo responsavel pelas funções de calcular (SOMAR,SUBTRAIR,MULTIPLICAR E DIVIDIR)
 * Data: 20/02/2026
 * Autor: Maxwillian
 * Versão: 1.0
 ***************************************************************************************************************/

//toLowerCase()--> Retorna a string em minusculo
//toUpperCase()--> Retorna a string em maiusculo


//Modelo de função anonima
//Calcular as 4 operações matemáticas

/***************************************************************************************************************
 * Objetivo: Arquivo responsavel pelas funções de calcular (SOMAR,SUBTRAIR,MULTIPLICAR E DIVIDIR)
 * Data: 20/02/2026
 * Autor: Maxwillian
 * Versão: 1.0
 ***************************************************************************************************************/

//toLowerCase()--> Retorna a string em minusculo
//toUpperCase()--> Retorna a string em maiusculo


//Modelo de função anonima
//Calcular as 4 operações matemáticas

const validarDados = function(valor1,valor2,operador){

    if(valor1 == '' || isNaN(valor1) || valor2 == ''|| isNaN ((valor2))){
        return false
    }else{
        return true 
    }

}

const calcular = function (numero1, numero2, operador) {

    //entrada de dados
    let valor1 = Number(numero1)
    let valor2 = Number(numero2)
    let resultado = false
    let operadorMatematico = String(operador).toUpperCase() // Recebe o operador como String
    //Condicionais para validar qual o tipo de operação de matemática
    // A ausencia da {} na condicional é porque qualquer condicional que tenha uma línha 
    // de processamento a { } torna-se opcional
    //

    /* if (operadorMatematico == 'SOMAR')
         resultado = valor1 + valor2
     else if (operadorMatematico == 'SUBTRAIR')
         resultado = valor1 - valor2
     else if (operadorMatematico == 'MULTIPLICAR')
         resultado = valor1 * valor2
     else if (operadorMatematico == 'DIVIDIR')
         resultado = valor1 / valor2
 
     
         return resultado  */

    switch (operadorMatematico) {
        case 'SOMAR':
            resultado =     somar(valor1,valor2)
            break;
        case 'SUBTRAIR':
            resultado =     subtrair(valor1,valor2)
            break;
        case 'MULTIPLICAR':
            resultado =     multiplicar(valor1,valor2)
            break;
        case 'DIVIDIR':
            resultado =     dividir(valor1,valor2)
            break;
    }
    return resultado
}

//Exenplo de funções baseada em SETA (arrow function)
//Funções para finalizar as operações matemáticas
// A Seta ja faz o return
const somar =           (numero1,numero2) => Number(numero1)+Number(numero2)
const subtrair =        (numero1,numero2) => Number(numero1)-Number(numero2)
const multiplicar =     (numero1,numero2) => Number(numero1)*Number(numero2)
const dividir =         (numero1,numero2) => Number(numero1)/Number(numero2)

module.exports={

    calcular,
    somar,
    subtrair,
    multiplicar,
    dividir
}

