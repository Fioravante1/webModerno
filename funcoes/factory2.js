// Criando uma função fabrica(factory) 

function criarProduto(nome, preco) {
  return {
    nome,
    preco,
    desconto: 0.1
  };
};

console.log(criarProduto('Celular', 2199));
console.log(criarProduto('televisão', 3199));