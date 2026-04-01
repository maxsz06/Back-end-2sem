/*****************************************************************************************
 * Objetivo: Arquivo Responsavel pela criaçãp da API do Projeto de Estados e Cidades 
 * Data: 01/04/2026
 * Autor: Maxwillinan
 * Versão: 1.0
 * 
 * Instalação do EXPRESS - npm install express --save
 *      -> Dependencia responsavel pela utilização do protocolo HTTP para criar uma API
 * 
 * Instalação do CORS -npm install cors --save
 *      -> Dependencia responsavel pelas configurações a serem realizadas para a 
 *          permissão de acesso da API
 * 
*****************************************************************************************/
    
//Import das dependencias para criar a API
const express    = require('express')
const cors       = require('cors')
const { METHODS } = require('node:http')

const app = express()  // Criando um objeto para manipular o express

const corsOptions = { // Conjunto de permições a serem aplicadas no CORS da API

    origin: ['*'], // A origiem da requisisão, podendo ser um ip ou *(TODOS)
    methods: 'GET', // São os verbos que seraão liberados na API (GET,POST,PUT,DELETE)
    allowedHeaders: ['Content-type', 'Autorization'] // São Permissãoes de cabeçario do CORS
}

app.use(cors(corsOptions)) // Configura as permissões da API através do CORS