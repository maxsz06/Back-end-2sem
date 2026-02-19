function tratarValores(setValorUm, setValorDois) {

    let valorUm = Number(setValorUm.replace(",", "."))
    let valorDois = Number(setValorDois.replace(",", "."))

    const regex = /^\d{2}\. \d{2}\. \d{2}$/

    //  console.log('teste tratamento '+ typeof valorUm, typeof valorDois) // chegando number 

    if (valorUm, valorDois === '') {
        console.log('Preencha os Campos!')
        process.exit();
        return false
    } else if (isNaN(valorUm)) {
        console.log('Opção Invalida: Apenas Numeros')
        process.exit();
        return false
    } else if (isNaN(valorDois)) {
        console.log('Opção Invalida: Apenas Numeros')
        process.exit();
    } else if (regex.test(valorUm || valorDois)) {

        console.log('Formato de numero Bloqueado!')

    } else {

        return Number(valorUm), Number(valorDois)

    }
}

function tratarEntrada(escolhaUser) {

    if (escolhaUser >= 3) {
        console.log('Opção Invalida: Numeros de 1 a 2')
        process.exit();
        return false
    } else if (isNaN(escolhaUser)) {
        console.log('Opção Invalida: Apenas Numeros')
        process.exit();
        return false
    } else if (escolhaUser = '') {
        console.log('Preencha os Campos!')
        process.exit();
        return false
    } else {
        return escolhaUser
    }

}

function tratarRestart() {


}


module.exports = {

    tratarEntrada,
    tratarValores,
    tratarRestart
}