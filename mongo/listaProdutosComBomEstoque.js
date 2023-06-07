use("ecomm")
let listaDeProdutosComEstoqueMaiorQueTres = db.products.find(
  {'QUANTIDADE EM ESTOQUE': {$gte:3}}, {_id: 1, NOME: 1, 'QUANTIDADE EM ESTOQUE': 1})

console.log(listaDeProdutosComEstoqueMaiorQueTres);