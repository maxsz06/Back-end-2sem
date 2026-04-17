/***************************************************************
 *  Objetivo: Arquivo responsavel pela configutação de mensagnes
 *  Autor: Maxwillian Santana
 *  Data:  17/04/2026
 *  Versão : 1.0
 ***************************************************************/

//Padronizção de cabeçario para retorno dos endpoints da api
const DEFAULT_MESSAGE = {

    api_description: 'API para gerenciar o controle de Filmes',
    development: 'Maxwillian Santana',
    version: '1.0.4.26',
    status: Boolean,
    status_code: Number,
    response : {}
}

//mensagens de erro da API
const ERROR_BAD_REQUEST = {status:false, status_code:400,message:'Os Dados enviados na requisição não estão corretos!'}

//mensagens de sucesso da API 
const SUCCESS_CREATED_ITEM = {status : true, status_code:201,message:'Registro inserido com um sucesso!'}

module.exports = {

    DEFAULT_MESSAGE,
    ERROR_BAD_REQUEST,  SUCCESS_CREATED_ITEM
}