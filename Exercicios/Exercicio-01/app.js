const readline = require('readline')  //Import da biblioteca
const entradaDeDados = readline.createInterface({ //Cria o objeto para entrada de dados
    input: process.stdin,
    output: process.stdout
})

entradaDeDados.question('digite o nome do cliente: ',function (nome){

    let nomeCliente = nome


    entradaDeDados.question('Escolha a forma de Duração das parcelas \n Digite (1) - Em Meses \n Digite (2) - Para Anos ',function(escolha){
        let opcao = escolha 

       
        if(escolha = 1){

            entradaDeDados.question('Digite o Produto: ',function(userProduto){
                let  produto = userProduto
            entradaDeDados.question('Digite o Valor: ',function(userPreco){    // CAPITAL = C  
                let capital = userPreco
            entradaDeDados.question('Digite a Taxa de Juros: ',function(userJurusMeses){ // Taxa de Juros = I
                let JurusMeses =  userJurusMeses 
            entradaDeDados.question('Qual o Tempo de Pagamento(Meses): ',function(userTempoMeses){ // Tempo de Pagamento = N
                let TempoMeses = userTempoMeses
            })    
            })    

            })   
            
            console.log(userProduto + userPreco + JurusMeses + TempoMeses)
        })


        }else if (escolha = 2){

        }else{
            console.log('Resposta Invalida')
        }

    }

    





)}

   



)

    


