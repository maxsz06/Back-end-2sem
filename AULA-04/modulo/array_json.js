/***************************************************
 * Objetivo: Manipuar dados utilizando array e Json
 * Data 05/03/2026
 * Autor: Max
 * Versão: 1.0
 * *************************************************/

/**
 * 
 *  [] -> Representa um objeto do tipo Array
 * {} -> Representa um objeto do tipo Json
 * 
 *  Array -> É um objeto que permite trabalhar com vários valores 
 *  em um único objeto
 * 
 *                 0       1      2  - Indice
 *  let nome = ['jose','maria','joao'] 
 * 
 * 
 * Json - É um objeto na memoria que permite trabalhar com CHAVE e VALOR
 * 
 *  let nome = {    "nome":"jose",
 *                  "telefone": "123456789", 
 *                  "e-mail:" "jose@gmail.com"
 *             } 
 */

//Formas de criar um ARRAY
const listaDeNome = ['Jose', 'Maria', 'Joao', 'Andre', 'Alex'] // Ja Atribuindo os valores dentro dele
const listaDeClientes = []   // Atribuindo valores conforme o tempo
const listaDeFornecedores = []

const exibirDados = function () {
    //Exibe o objeto array e seu conteúdo
    console.table(listaDeNome)  // Exibe o array em formato em tabela em indices

    console.log(listaDeNome[1]) // Exibe apenas o valor do respectivo do indic do array


//---------------------------------------------------------------------------------------------------------------------------

    console.log(typeof (listaDeNome[3])) // Retorna oo tipo de dados de um indice do array

    console.log(`O nome do cliente é: ${listaDeNome[0]}`)
    console.log(`O nome do cliente é: ${listaDeNome[1]}`)
    console.log(`O nome do cliente é: ${listaDeNome[2]}`)
    console.log(`O nome do cliente é: ${listaDeNome[3]}`)
    console.log(`O nome do cliente é: ${listaDeNome[4]}`)

    //Estruturas de repetição
    //while

    console.log('------[WHILE]--------')
    let cont = 0
    while (cont <= 4) {
        console.log(`O nome do cliente é ${listaDeNome[cont]}`)
        cont += 1
    }

    console.log('------[FOR]--------')
    
    for (let contador = 0; contador < listaDeNome.length; contador++) {
        console.log(`O nome do cliente é ${listaDeNome[contador]}`)
    }


    console.log('------[FOR EACH]--------')

    listaDeNome.forEach(function(cliente){  // Retorna o conteudo de cada elemento através de uma Call Back

        console.log(`O nome do cliente é ${cliente}`)

    })

    console.log('------[FOR IN]--------') // Retorna o Indice do elemento, e será preciso colocar dentro do array
    //  Ex: listaNome[item] Pratiamente igual ao For e While
                                                
    for(item in listaDeNome){
        console.log(`O nome do cliente é ${listaDeNome[item]}`)
        
    }


    //Percorre o array e retorna somente o conteúdo de cada indice, sendo muito parecido com o ForEach
    console.log('------[FOR Off]--------')

    for(cliente of listaDeNome){
        console.log(`O nome do cliente é ${cliente}`)
        
    }


    console.log(listaDeNome.length)  // Para saber quantas entidades tem dentro de um
}
const manipularDados = function(){
    //Adicionando Valores novos no array através de indices
    listaDeClientes[0]= 'Jose da Silva'
    listaDeClientes[1]= 'Maria da Silva'
    listaDeClientes[2]= 'João da Silva'
    listaDeClientes[4]= 'Alex da Silva' 
    console.log(listaDeClientes)

    //Permite adicionar novos valores no array sempre no final da lista
    listaDeFornecedores.push('Luiz da Silva')
    listaDeFornecedores.push('Zezinho da Silva')
    listaDeFornecedores.push('Huguinho da Silva')
    listaDeFornecedores.push('Luisinho da Silva','Andre da Silva', 'Carlos da Silva')

    console.log(listaDeFornecedores)
}




//exibirDados()
manipularDados()