
//Comentario em Linha

/*  Coentario em bloco*/


//Imprime no terminal um conteudo
console.log('testando print do console')

var nome = 'Maxwillian' // Variavel declarada com o nome
console.log (nome) // Vai imprimir a Variavel declarada ("nome")
console.log ('O nome do Usuario é: ' + nome) // vai imprimir o Texto +  a variavel declarada
console.log (`nome do usuario é: ${nome}`) /* É uma forma de concatenar mais compactada 
  Pode usar tanto essa tanto a normal acima*/ 

  //Import da bliblioteca para captar entrada de dados via terminal
  var readline = require('readline') 

  //Cria uma Interface para Entrada e saida de dados pelo terminal
  var entradaDeDados = readline.createInterface({
        input : process.stdin,
        output: process.stdout
  })

            //Função para retornar o nome digitado no terminal
            //O metodo question após a digitação chama sua função "CALL back"
             //para entregar o que foi digitado no terminal, através do argumento
             //nomeUsuario
      entradaDeDados.question('Favor digitar seu nome: ',function(nomeUsuario){
      
       
        //Entrada de dados para o Email
      entradaDeDados.question('Favor digitar seu Email:',function(emailUsuario){
        console.log('O nome do usuario é ' + nomeUsuario)
        console.log(`O email do usuario é: ${emailUsuario}`)
        

    })
       
  })