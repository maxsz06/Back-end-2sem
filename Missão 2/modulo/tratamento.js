/****************************** 
* Ojetivo: Arquivo Responsavel pelos
* Tratamentos de dados
* Autor: Max
* Data 13/02/2026
* Versão: 1.0
* ****************************/


function tratarDados(valorUm, valorDois) {

    //Validação para entradas vazias ou de caracteres invalidos 
    if (valorUm, valorDois == "" || isNaN(valorUm, valorDois)) {

        console.log('Erro: Valor vazio ou Caractere Invalida!')

        return false

        //Validação se o usuario digitar um valor "NN.NN.NN"
    } else if (!/^\d+(\.\d+)?$/.test(valorUm, valorDois)) {

        console.log('Valor Invalido!')

        return false
    } else {

        return valorUm, valorDois
    }
}


module.exports = {

    tratarDados,
    tratarDadosMultiplicacao
}