//Import da biblioteca
var readline = require('readline')

//Criação do objeto para manipular a entrada de dados
var entradaDeDados = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

//Entrada de DAODS

//NOME
entradaDeDados.question('Digitar seu nome: ', function (nomeUsuario) {

// Valores

  entradaDeDados.question('Digite o valor 1: ', function (n1) {
    entradaDeDados.question('Digite o valor 2: ', function (n2) {
      entradaDeDados.question('Digite o valor 3: ', function (n3) {

//Saida do Console
        console.log('o nome do usuario é: ' + nomeUsuario)
        console.log(Number(n1) + Number(n2) + Number(n3))

      })
    })
  })
})