/***********************************************************************************************
 *  Objetivo: Arquivo responsavel pela validação,tratamento e mainipulação de dados
 *            para o CRUD de filmes
 *  Data 17/04/2026
 *  Autor: Marcel
 *  Versão: 1.0
 **********************************************************************************************/

 const config_message = require('../modulo/configMessages.js') // import do arquivo de predonizção de mensagens 
 const filmeDAO = require('../../model/DAO/filme/filme.js') // Import do arquivo DAO para fazer o DAO  do filme no banco de dados

//Fução para inserir um novo filme
const inserirNovoFilme =  async function(filme){

    let message = JSON.parse(JSON.stringify(config_message)) // Criando um clone do objeto JSON para manipular sua estrutura locam sem modificar
                                                             //Sua estrutura Local
    // Validação de dados para atributos do Filme (Status 400)                                                         
    if(filme.nome == '' || filme.nome == null || filme.nome == undefined || filme.nome.length > 80 ){
        message.ERROR_BAD_REQUEST.field = '[NOME] INVÁLIDO'
         //return message.ERROR_BAD_REQUEST // 400
    }else if(filme.data_lancamento == '' || filme.data_lancamento == null || filme.data_lancamento == undefined ||filme.data_lancamento.length != 10){
        message.ERROR_BAD_REQUEST.field = '[DATA] INVÁLIDA'

    }else if (filme.duracao == '' || filme.duracao == null || filme.duracao == undefined || filme.duracao.length < 5){
        message.ERROR_BAD_REQUEST.field = '[DURAÇÃO] INVÁLIDO'

    }else if (filme.sinopse == '' || filme.sinopse == null || filme.sinopse == undefined || filme.sinopse){
        message.ERROR_BAD_REQUEST.field = '[SINOPSE] INVÁLIDO'

    }else if (isNaN(filme.avaliacao) || filme.avaliacao < 5){
        message.ERROR_BAD_REQUEST.field = '[AVALIAÇÃO] INVÁLIDO'

    }else if (filme.valor == '' || filme.valor == null || filme.valor == undefined || isNaN(filme.valor) || filme.valor.length > 5){
        message.ERROR_BAD_REQUEST.field = '[VALOR] INVÁLIDO'

    }else if (filme.capa.length > 255){
        message.ERROR_BAD_REQUEST.field = '[CAPA] INVÁLIDA'

    }else{
         let result = await filmeDAO.insertFilme(filme)
            if (result){ //201
                message.DEFAULT_MESSAGE.status = message.SUCCESS_CREATED_ITEM.status
                message.DEFAULT_MESSAGE.status_code = message.SUCCESS_CREATED_ITEM.status_code
                message.DEFAULT_MESSAGE.message = message.SUCCESS_CREATED_ITEM.message
            }else{ //400
                message.DEFAULT_MESSAGE.status = message.ERROR_BAD_REQUEST.status
                message.DEFAULT_MESSAGE.status_code = message.ERROR_BAD_REQUEST.status_code
                message.DEFAULT_MESSAGE.message = message.ERROR_BAD_REQUEST.message
                message.DEFAULT_MESSAGE.field = message.ERROR_BAD_REQUEST.field
            }
            return message.DEFAULT_MESSAGE
    }
}

//Função para atualizar um filme
const atualizarFilme = async function(){
}

//Função para retornar todos os filmes
const listarFilme = async function(){
}

//Função para buscar um filme pelo ID 
const buscarFilme = async function(){
}

//Função para excluir um filme 
const excluirFilme = async function(){
}

module.exports = { 
    inserirNovoFilme,
    atualizarFilme,
    listarFilme,
    buscarFilme,
    excluirFilme
}