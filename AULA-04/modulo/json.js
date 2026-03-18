const criandoDadosJSON = function () {
  let aluno = {
    nome: "José",
    ra: 123456,
    telefone: "91245323",
    email: "jose@gmail.com",
  };

  console.table(aluno); // ! Exibindo o objeto JSON completo
  console.log(aluno);

  console.log(aluno.email); // ! Exibindo apenas um atributo do JSON
  console.log(aluno.telefone);

  aluno.sexo = "Masculino"; // ! Adiciona um novo atributo no JSON
  console.log(aluno);

  delete aluno.telefone; // ! Deleta um Atributo existente no JSONS
  console.log(aluno);
};

const cadastroDeProdutos = function () {
  let cores = [
    //! isso é um vetor "[]" -> Isso permite repetição
    { id: 1, cor: "Branco" }, // * INDICE 0
    { id: 2, cor: "Preto" }, // * INDICE 1
    { id: 3, cor: "Azul" }, // * INDICE 2
    { id: 4, cor: "Rosa" }, // * INDICE 3
    { id: 5, cor: "Cinza" }, // * INDICE 4
    { id: 6, cor: "Vermelho" }, // * INDICE 5
  ];

  let marcas = [
    { id: 1, modelo: "LG", telefone: "123456789", email: "lg@gmail.com" },
    { id: 2, modelo: "Dell", telefone: "123657789", email: "dell@gmail.com" },
    {
      id: 3,
      modelo: "Lenovo",
      telefone: "124445789",
      email: "lenovo@gmail.com",
    },
    { id: 4, modelo: "Apple", telefone: "123456842", email: "apple@gmail.com" },
    {
      id: 5,
      modelo: "Rayzer",
      telefone: "137956789",
      email: "rayzer@gmail.com",
    },
    {
      id: 6,
      modelo: "Logitech",
      telefone: "923256748",
      email: "logitech@gmail.com",
    },
    {
      id: 7,
      modelo: "Multilaser",
      telefone: "9232334769",
      email: "multilaiser@gmail.com",
    },
  ];

  let produtos = [
    {
      id: 1,
      nome: "monitor",
      descricao: "27 polegadas",
      marca: [marcas[1].modelo],
      qtd: 20,
      cor: [cores[4], cores[1]],
      valor: 800.5,
    },
    {
      id: 2,
      nome: "Teclado",
      descricao: "Teclado Mecânico",
      marca: [marcas[5].modelo],
      qtd: 200,
      cor: cores,
      valor: 400.5,
    },
    {
      id: 3,
      nome: "mouse",
      descricao: "Mouser Sem fio",
      marca: [marcas[0].modelo, marcas[1].modelo, marcas[5].modelo], // 0,1,5
      qtd: 200,
      cor: [cores[0], cores[1], cores[4]],
      valor: 80.5,
    },
  ];

  /*produtos[0].cor.forEach(function (nomeCOR) {
    console.log("A COR DO PRODUTO É: " + nomeCOR.cor);
  });*/

  console.log(produtos);

  produtos.forEach(function (itemProduto) {
    //!percorre o objeto de produto para trazer os dados de cada produto
    console.log(`Produto: ${itemProduto.nome}`);

    itemProduto.marca.forEach(function (itemMarca) {
      // !percorre o objeto de marca dentro de cada produto, para trazer as marcas
      console.log(` └──Marca: ${itemMarca}`);

      itemProduto.cor.forEach(function (itemCor) {
        //! Percorre o objeto de cor dentro de dada produto, para trazer as cores
        console.log("   └──Cor:" + itemCor.cor);
      });
    });
  });

  console.log("Pesquisa:NOME =================================");
  //Pesquisando um produto pelo NOME
  let nome = "Mouse";

  produtos.forEach(function (itemProduto) {
    if (String(itemProduto.nome).toUpperCase() == String(nome).toUpperCase()) {
      console.log(itemProduto);
    }
  });

  console.log("Pesquisa:COR ================================");
  // Pesquisando um produto pela COR

  let cor = "ciano"
  let status = false

  produtos.forEach(function(itemProduto){
    itemProduto.cor.forEach(function(itemCor){
      if(String(itemCor.cor).toUpperCase()== String(cor).toUpperCase()){
        console.log(itemProduto)
        status = true
      }
    })
  })

  if (!status)
    console.log ('Item pesquisado não foi encontrado')
};

cadastroDeProdutos();
