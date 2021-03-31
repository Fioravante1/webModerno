function soma() {
  let soma = 0;
  for (i in arguments) { // Arguments variavel local dentro de todas funções, é similar a um array. Não possui propriedades de um array. 
    soma += arguments[i];
  };
  return soma;
};

console.log(soma(2, 5, 7, 10));