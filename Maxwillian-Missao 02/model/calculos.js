
function calcularAdicao(setValorUm, setValorDois) {

    let valorUm = Number(setValorUm.replace(",", "."))
    let valorDois = Number(setValorDois.replace(",", "."))

    console.log(valorUm, valorDois)
    let soma = parseFloat(valorUm + valorDois)

    return soma
}

function calcularSubtracao(setValorUm, setValorDois) {

    let valorUm = Number(setValorUm.replace(",", "."))
    let valorDois = Number(setValorDois.replace(",", "."))

    let subtracao = valorUm - valorDois

    return subtracao
}

function calcularMultplicacao(setValorUm, setValorDois) {

    let valorUm = Number(setValorUm.replace(",", "."))
    let valorDois = Number(setValorDois.replace(",", "."))

    let multiplicacao = valorUm * valorDois

    return multiplicacao
}

function calcularDivisao(setValorUm, setValorDois) {

    let valorUm = Number(setValorUm.replace(",", "."))
    let valorDois = Number(setValorDois.replace(",", "."))

    if (valorDois === 0) {
        console.log('Valor inválido: 0 não permitido')

        return false
    }
    let divisao = valorUm / valorDois

    return divisao

}

module.exports = {

    calcularAdicao,
    calcularSubtracao,
    calcularMultplicacao,
    calcularDivisao
}