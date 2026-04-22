/*******************************************************************************************
 *
 *
 *
 *
 *******************************************************************************************/

const express       = require("express");
const cors          = require("cors");
const app           = express();
const bodyParser    = require('body-parser')

const controlerFilme = require ('./controller/filme/controler_filme.js')

//Criando um objeto para manipular dados do body da API em formato JSON
const bodyParserJSON = bodyParser.json()

const corsOptions = {
  // Conjunto de permições a serem aplicadas no CORS da API
  origin: ["*"], // A origiem da requisisão, podendo ser um ip ou *(TODOS)
  methods: "GET, POST, PUT, DELETE, OPTIONS", // São os verbos que seraão liberados na API (GET,POST,PUT,DELETE)
  allowedHeaders: ["Content-type", "Autorization"], // São Permissãoes de cabeçario do CORS
};
app.use(cors(corsOptions)); // Configura as permissões da API através do CORS

//------------------------------------[END-POINTS]-----------------------------------------------------------------------

app.post('/v1/senai/locadora/filme', bodyParserJSON ,async function(request,response){

    // Recebe o conteúdo dentro do body da requisição
    let dados = request.body  
    let contentType = request.headers['content-type'] // recebe o contenty type da requisição para validar se é um JSON

    let result = await controlerFilme.inserirNovoFilme(dados,contentType)

    response.status(result.status_code)
    response.json(result)
})


//----------------------------------------------------------------------------------------------------------------------
const PORT = process.env.PORT || 8080;
app.listen(PORT, function () {
  console.log("API FUNCIONANDO E AGUARDANDO NOVAS REQUISIÇÕES ...");
});
