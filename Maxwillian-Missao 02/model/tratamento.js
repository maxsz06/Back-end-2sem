function tratarValores(setValorUm, setValorDois) {

    let valorUm = Number(setValorUm.replace(",", "."))  // Transforma os numeros em "," para "."
    let valorDois = Number(setValorDois.replace(",", "."))

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

function validarPontos(setValorUm, setValorDois) {
    let pontos1 = (setValorUm.match(/\./g) || []).length; // Recebe o valor e o "match procura os padroes (regex) dentro de uma string"
    let pontos2 = (setValorDois.match(/\./g) || []).length; // "/\./" --> Procura o ponto dentro do valor "g"--> Procura como global

    if (pontos1 > 1 || pontos2 > 1) {       // Após contar os pontos a cima ele vai passar por uma validação onde se "pontos1" tiver mais de um ponto 
        console.log("Valor no formato: 'nn.nn.nn':  Invalido "); // ele vai dar invalido
        process.exit()                              // e vai encerrar a aplicação
    } else {

        console.log("Ambos são válidos");
        return setValorUm, setValorDois // Se passar o valor certinho, ele vai retornar os valores passador pelo usuario
    }
}

module.exports = {

    tratarEntrada,
    tratarValores,
    validarPontos,

}