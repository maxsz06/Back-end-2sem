/*******************************************************
* Objetivo: Calcular Medias escolares
* Data: 29/01/2026
* Autor: Maxwillian
* Versão 1.0
********************************************************/

/*
    Exixtem 3 tipos de criação de variaveis

    var -> Permite a criação de um espaço na memória do
     tipo variavel. Foi utilizado muito 
     em projetos antigos.
     Recomendação: Caso voce queira utilizar, recomenda-se
     na criação de variaveis globais (Inicio do codigo).
     _____________________________________

    let -> Permite a ciração de um espaço na memória
            do tipo variavel. A utilizização deste padrão é
            para a criação dentro de bloco de programação "{  }"
            essa variavel nasce e morre dentro deste bloco
            Não é recomendado a sua utilização em escopo local.

     ______________________________________

    const -> Permite a criação de um espaço na memoria
            onde não sofrera alteração durante o codigo. A const
            pode ser utilizada dentro e fora do bloco "{  }".
            Dica: Caso você queira diferenciar uma const, um var ou um let
            A const você pode criar com letras MAIUSCULAS
*/

/*Operadores de comparação

 == -> Permite comparar a igualdade de duas variaveis
 <  -> Permite comparar valores menores
 >  -> Permite comparar valores maiores
 >= -> Permite comparar valores maiores ou iguais
 <= ->Permite comparar valores menores ou iguais
 != -> Permite comparar a diferença entre conteúdos
 === -> Permite comparar a igualdade de  conteúdos
        e a tipagem de dados
 !== -> Permite comparar a diferença de conteudos e a
        igualdade de dados
 ==! -> Permite comparar a igualdade de conteudos e a
        Diferença de tipos de dados
!=! -> Permite comparar a diferença de conteúdos e a 
        Diferença de dados       

*/

/*Operadores Logicos

    E   -> AND -> &&
    OU  -> OR  -> ||
    NÃO -> NOT -> !

*/

/*
        Conversãoes de tipods de dados

        parseInt() -> Permite converter um número para INTERO
        parseFloat()-> Permite converter uma String para número DECIMAL
        Number ()-> Permite converter uma String para número (INTERO OU DECIMAL)
        String()-> Permite converter um conteúdo para String
        Boolean ()-> Permite converter um conteúdo para booleano
        typeoff() -> Permite vereficar um tipo de dados de uma 
*/

//Import da biblioteca
const readline = require('readline')

//Cria o objeto para entrada de dados
const entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

entradaDeDados.question('Digite o nome do aluno: ', function (nome) {

    
                    let nomeAluno = nome //Recebe o nome do aluno que foi digitado

            entradaDeDados.question('Digite a nota 1: ', function (valor1) {
                    let nota1 = valor1                                  //Valor recebe Nota 1

            entradaDeDados.question('Digite a nota 2: ', function (valor2) {
                    let nota2 = valor2                                  //Valor recebe Nota 2

            entradaDeDados.question('Digite a nota 3: ', function (valor3) {
                    let nota3 = valor3                                  //Valor recebe nota 3

             entradaDeDados.question('Digite a nota 4: ', function (valor4) {
                    let nota4 = valor4                                  //Valor recebe nota 4

            

                    //Validação de entrada vazia
                    if(nomeAluno == '' ||  nota1==''|| nota2 =='' || nota3 =='' || nota4==""){
                        console.log('ERRO: É obrigatorio o preenchimento')

                    // Limitação de valores            
                    }else if  (nota1 > 100 || nota2 > 100 || nota3 > 100 || nota4 > 100 || nota1 < 0 || nota2 < 0 || nota3 < 0 || nota4 < 0){
                        console.log('erro:Só é permitido  a entrada de valores entre 0 e 100')

                    // Validação de entrada com letras
                    //isNan()-> permite validar ser o conteudo da variavel tem algum caracter ao invés de um número    
                    }else if (isNaN(nota1)|| isNaN(nota2) || isNaN(nota3) || isNaN(nota4)){ // A função retorna true ou false 
                        console.log('Não é possivel calcular a média do aluno com letras')
                    
                    }else{
                     
                        let statusAluno    
                            //Calculo da média
                        let somatoria = (Number(valor1)+Number(valor2)+Number(valor3)+Number(valor4))
                        let resultado = (Number (somatoria) / 4)
                            // Validação do Status de aprovação 
                         if(resultado >= 70){
                        statusAluno = 'Aprovado' 
                         }else if(resultado >=50 && resultado <70){
                        statusAluno = 'Recuperação'
                         }else if(resultado<50){
                        statusAluno = 'Reprovado'
                         }

                    console.log('Aluno(a): '+ nomeAluno +'Média: '+ resultado)
                    console.log(statusAluno)
                    
                    }
                })
            })
        })
    })
})