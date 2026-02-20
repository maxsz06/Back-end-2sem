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
        case 'SOMAR', '+':
            resultado = valor1 + valor2
            break;
        case 'SUBTRAIR','-':
            resultado = valor1 - valor2
            break;
        case 'MULTIPLICAR','*':
            resultado = valor1 * valor2
            break;
        case 'DIVIDIR','/':
            resultado = valor1 / valor2
            break;
    }
    return resultado
}

console.log(calcular(15, 30, 'Somar'))