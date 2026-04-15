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
const express = require("express");
const cors = require("cors");
const { METHODS } = require("node:http");

const app = express(); // Criando um objeto para manipular o express

const corsOptions = {
  // Conjunto de permições a serem aplicadas no CORS da API

  origin: ["*"], // A origiem da requisisão, podendo ser um ip ou *(TODOS)
  methods: "GET", // São os verbos que seraão liberados na API (GET,POST,PUT,DELETE)
  allowedHeaders: ["Content-type", "Autorization"], // São Permissãoes de cabeçario do CORS
};

app.use(cors(corsOptions)); // Configura as permissões da API através do CORS

//Response -> Retornos da API
//Request -> São chamadas de dados na API

const estadosCidades = require("./modulo/manipulacao_.js"); //Import do Arquivo de funções

//Criando ENDPOINTS para API

// filtra os dados dos estados filtrando pelo uf
app.get("/v1/senai/dados/estado/:uf", function (request, response) {
  let sigla = request.params.uf;
  let estado = estadosCidades.getDadosEstado(sigla);

  if (estado.status) {
    response.status(200);
    response.json(estado);
  } else {
    response.status(404);
    response.json({ mesage: "Estado Não Encontrado" });
  }
});
//  retorna dados da capital do estado filtrando pelo uf
app.get("/v1/senai/capital/estado/:info", function (request, response) {
  let sigla = request.params.info;
  let estado = estadosCidades.getCapitalEstado(sigla);

  if (estado.status) {
    response.status(200);
    response.json(estado);
  } else {
    response.status(404);
    response.json({ mesage: "Estado Não Encontrado" });
  }
});

// retorna dados das capitais do Brasil
app.get("/v1/senai/estados/capital/brasil", function (request, response) {
  let estado = estadosCidades.getCapitalPais();

  if (estado.status) {
    response.status(200);
    response.json(estado);
  } else {
    response.status(404);
    response.json({ mesage: "Estado Não Encontrado" });
  }
});

// Retorna os estados da região pelo paramentro "regiao"
app.get("/v1/senai/estados/regiao/:regiao", function (request, response) {
  let regiao = request.params.regiao;
  let estado = estadosCidades.getRegiao(regiao);

  if (estado.status) {
    response.status(200);
    response.json(estado);
  } else {
    response.status(404);
    response.json({ mesage: "Estado Não Encontrado" });
  }
});
// Retorna as cidades do estado pelo parametro "UF"
app.get("/v1/senai/cidades/estado/:uf", function (request, response) {
  let uf = request.params.uf;
  let estado = estadosCidades.getCidades(uf);

  if (estado.status) {
    response.status(200);
    response.json(estado);
  } else {
    response.status(404);
    response.json({ mesage: "Estado Não Encontrado" });
  }
});

app.get("/v1/senai/estados", function (request, response) {
  let estados = estadosCidades.getListadeEstados(); // chamar a função que retorna a lista de Estados

  response.status(200);
  response.json(estados);
});

app.get("/v1/senai/help", function (request, response) {
  let docAPI = {
    "API-description": "API para manipular dados de Estados e Cidades",
    Date: "2026-04-02",
    Development: "Maxwillian Santana",
    GitHub: "https://github.com/maxsz06",
    Linkedin: "https://www.linkedin.com/in/maxw06",
    Version: "1.0",
    "Endpoints:": [
      {
        id: 1,
        rota: "/v1/senai/estados",
        obs: "Retorna a lista de todos os estados (Em Sigla)",
      },
      {
        id: 2,
        rota: "/v1/senai/dados/estado/sp",
        obs: "Retorna os dados do estado filtrando pela (sigla do estado)",
      },
      {
        id: 3,
        rota: "/v1/senai/capital/estado/sp",
        obs: "Retorna os dados da capital filtrando pela (sigla do estado)",
      },
      {
        id: 4,
        rota: "/v1/senai/estados/capital/brasil",
        obs: "Retorna todos os Estados que formaram capital do Brasil",
      },
      {
        id: 5,
        rota: "/v1/senai/estados/regiao/sudeste",
        obs: "Retorna todos os Estados Referente a Região",
      },
      {
        id: 6,
        rota: "/v1/senai/cidades/estado/:uf",
        obs: "Retorna todas as cidades filtrando pela sigla do estado",
      },
    ],
  };

  response.status(200);
  response.json(docAPI);
});

    app.listen(8080, function () {
      // Serve para inicializar a api para receber requisições
      console.log("API FUNCIONANDO E AGUARDANDO NOVAS REQUISIÇÕES ...");
    });
