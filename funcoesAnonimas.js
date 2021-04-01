const soma = function (y, x) {
  return y + x;
};
  
const imprimirResultado = function (a, b, operacao = soma) {
  console.log(operacao(a, b));
};

imprimirResultado(3, 4);
imprimirResultado(3, 4, soma);
imprimirResultado(3, 4, function (y, x) {
  return y - x;
});