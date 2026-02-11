/****************************** 
 * Ojetivo: Arquivo responsavel pelas funções de 
   Calculos para este projeto
 * Autor: Max
 * Data 11/02/2026
 * Versão: 1.0
 * 
 * 
 * 
 *  Funçoes: 
 * Calcular Juros Compostos = calcularJurosCompostos
 * Calcular Percentual =  calcularPercentual
 * ****************************/

function calcularJurosCompostos(capitalProduto, taxaCompra, setTempo) {
    // Recebe os argumentos da função em variaveis locais
    // As Variaveis (valor, taxa e tempo são numericas por conta da converção)
    // Mas os argumentos (capitalProduto, taxaCompra, setTempo ainda sera Stringss) 
    let capital = Number(capitalProduto)
    let juros = Number(taxaCompra)
    let tempo = Number(setTempo)

    //Validação para entradas vazias ou de caracteres invalidos 
    if (capitalProduto == "" || isNaN(capitalProduto) || setTempo == "" || isNaN(setTempo)) {
        console.log('Erro: Valores de compra ou tempo de pagamento estão incorretos!')
        return false
    } else {
        //let montante = capital * ((1+juros)**tempo)

        //chama a função para converter o numero em percentual
        let percentual = calcularPercentual(juros)


        //Validação para o erro do percentual na função calcularPercentual()
        if (percentual) {
            let montante = capital * ((1 + percentual) ** tempo)
            return Number(montante.toFixed(2))
        } else {
            console.log('Erro: Valor da taxa esta incorreta')
            return false
        }
    }
}

function calcularPercentual(taxaCompra) {

    let numeroPercentual = Number(taxaCompra)

    // Validação para verefiar se é um numero valido
    if (taxaCompra == "" || taxaCompra <= 0 || isNaN(taxaCompra)) {

        return false // não pode processar
    } else {
        //Processamento do calculo percentual
        let percentual = numeroPercentual / 100
        return Number(percentual.toFixed(2))
    }
}

//tornando as duas funções publicas para este projeto
module.exports = {
    calcularJurosCompostos,
    calcularPercentual
}