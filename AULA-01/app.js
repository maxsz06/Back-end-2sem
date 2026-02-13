// process.exit() -> Para encerrar o programa
// switch() -> Para fazer melhor fluxo de escolha do usuario e para uma facil leitura evitando a utilização do if e else 



const readline = require('readline')  //Import da biblioteca
const entradaDeDados = readline.createInterface({ //Cria o objeto para entrada de dados
    input: process.stdin,
    output: process.stdout
})

entradaDeDados.question('digite o nome do cliente: ', function (nome) {

    let nomeCliente = nome

    entradaDeDados.question('Escolha a forma de Duração das parcelas \n Digite (1) - Em Meses \n Digite (2) - Para Anos ', function (escolha) {
        let opcao = Number(escolha)

        if (isNaN(opcao)) {
            console.log("ERRO:apenas numeros: '1' ou '2' ")
        } else {
            switch (opcao) {  // Pega a informação do usuario de qual fluxo ele quer seguir se é anos ou meses
                case 1:   // fluxo meses

                    entradaDeDados.question('Digite o nome do produto: ', function (setProduto) {
                        let produto = setProduto

                        if (!isNaN(produto)) {  // Tratamento caso o usuario entrar com numero em "Produto"

                            console.log('Preencha com Letras!!')
                            process.exit()

                        } else { }

                        entradaDeDados.question('Digite o Preço do produto: ', function (setPreco) {
                            let preco = setPreco              // RECEBE PRODUTO + VEREFICÃO

                            if (isNaN(preco)) {

                                console.log('Preencha com Numeros!!')
                                process.exit()

                            } else { }

                            entradaDeDados.question('Qual o juros do produto? Digite sem "%": ', function (setJuros) {
                                let juros = setJuros              // RECEBE juros + VEREFICÃO

                                if (isNaN(juros)) {

                                    console.log('Preencha com Numeros!!')
                                    process.exit()

                                } else { }

                                entradaDeDados.question('Qual o tempo que o Cliente ira pagar? (em meses): ', function (setMeses) {
                                    let meses = setMeses          // RECEBE meses + VEREFICÃO

                                    if (isNaN(meses)) {

                                        console.log('Preencha com Numeros!!')
                                        process.exit()

                                    } else { }

                                    if (produto == '' || preco == '' || juros == '' || meses == '') {  // Caso o usuario digitar cada parte em nulo
                                        console.log("Erro:Preencha todos os campos")

                                    } else {

                                        //Calculo do Montante

                                        let conversaoJuros = juros / 100
                                        let montante = preco * (1 + conversaoJuros) ** meses
                                        let precoAcrecentado = montante - preco

                                        saida(nome, produto, meses, montante, preco, precoAcrecentado)// Passa para uma outra função as informações digitadas pelo usuario

                                    }
                                }) //Fechamento Question Meses
                            })// Fechamento Question Juros
                        }) // Fechamento Question Preço
                    }) // Fechamento Question Produto 

                    break

                case 2: // fluxo ano

                    entradaDeDados.question('Digite o nome do produto: ', function (setProduto) {
                        let produto = setProduto            // RECEBE PRODUTO + VEREFICÃO 

                        if (!isNaN(produto)) {

                            console.log('Preencha com Numeros!!')
                            process.exit()

                        } else { }

                        entradaDeDados.question('Digite o Preço do produto: ', function (setPreco) {
                            let preco = setPreco                // RECEBE PREÇO + VEREFICAÇÃO

                            if (isNaN(preco)) {

                                console.log('Preencha com Numeros!!')
                                process.exit()

                            } else { }

                            entradaDeDados.question('Qual o juros do produto? Digite sem "%": ', function (setJuros) {
                                let juros = setJuros                //RECEBE JUROS +  VEREFICAÇÃO

                                if (isNaN(juros)) {

                                    console.log('Preencha com Numeros!!')
                                    process.exit()

                                } else { }

                                entradaDeDados.question('Qual o tempo que o Cliente ira pagar? (em anos): ', function (setAnos) {
                                    let anos = setAnos                  //RECEBE ANOS + VEREFICAÇÃO

                                    if (isNaN(anos)) {

                                        console.log('Preencha com Numeros!!')
                                        process.exit()                //ENCERRA PROGRAMA

                                    } else { }

                                    if (produto == '' || preco == '' || juros == '' || anos == '') {     // VEREFICAÇÃO SE VEM VAZIA 
                                        console.log("Erro:Preencha todos os campos")
                                    } else {

                                        //Calculo do Montante

                                        let meses = anos * 12
                                        let conversaoJuros = juros / 100
                                        let montante = preco * (1 + conversaoJuros) ** meses
                                        let precoAcrecentado = montante - preco

                                        saida(nome, produto, meses, montante, preco, precoAcrecentado) // Passa para uma outra função as informações digitadas pelo usuario

                                    }
                                })//Fechamento Question Meses
                            })// Fechamento Question Juros
                        })// Fechamento Question Preço
                    })//Fechamento Question Meses

                    break
            }

        }
    }
    )
}
)

function saida(nome, produto, meses, montante, preco, precoAcrecentado) {

    console.log("--------------------------------------------------------------------------------")
    console.log('=====[Nova Shop]=====')
    console.log('Muito obrigado por realizar a sua compra Sr(a) ' + nome)
    console.log('A compra do Produto: ' + produto + ", tem o valor de: " + preco)
    console.log('A sua compra parcelada em: ' + meses + " vezes e o Sr(a) pagará: " + montante.toFixed(2))
    console.log('O acrecimo realizado ao valor de: ' + precoAcrecentado.toFixed(2) + ' será de ' + montante.toFixed(2))
    console.log('')
    console.log('Muito Obrigado por escolher a [Nova Shop]')
    console.log("--------------------------------------------------------------------------------")
}




