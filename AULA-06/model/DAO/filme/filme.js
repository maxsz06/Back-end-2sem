/************************************************************************************
 * Objetivo: Arquivo responsável pelo CRUD no Banco de dados MySQL na tabela Filme
 * Data 15/04/2026
 * Autor : Maxwillian
 * Versão :1.0
**************************************************************************************/

//Import da biblioteca para gerenciar o banco de dados MySql no node.JS
const knex = require('knex')

//Import do arquivo de configuração para conexão ocm o BD mySql

const knexConfig = require ('../../database_config_knex/knexFile.js')

//Criar a conexão com o bBD MySql
const knexConex = knex(knexConfig.development)

//Funçao para Inserir dados na tabela de filme
const insertFilme = async function(filme){

    try {
        
  

        let sql = `
                        insert into tbl_filme(
                            nome,
                            data_lancamento,
                            duracao,
                            sinopse,
                            avaliacao,
                            valor,
                            capa
                            )
                            values (
                            '${filme.nome}',
                            '${filme.data_lancamento}',
                            '${filme.duracao}',
                            '${filme.sinopse}',
                            if('${filme.avaliacao}' = '', null ,'${filme.avaliacao}'),
                            '${filme.valor}',
                            '${filme.capa}'
                            );`

        //executar o ScriptSQL no Banco de dados                    
        let result = await knexConex.raw(sql)

          if(result)
        return true
          else
        return false

    } catch (error) {
        //console.log(error)
        return false
    }
    
}



//Funçao para Atualizar um filme existente na tabela
const updateFilme = async function(filme){
}

//Função para retornar todos os dados da tabela de filme
const selectAllFilme = async function(){
}

// Função para retornar os dados do filme filtrando pelo id
const selectByIdFilme = async function(id){
}

//Função para excluir um filme pelo id
const deleteFilme = async function(id){

}


module.exports = {
    insertFilme, updateFilme,
    selectAllFilme, selectByIdFilme,
    deleteFilme
}