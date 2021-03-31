let dobro = function (a) {
  return 2 * a;
};

// refatorando a função para arrowFunction; 
// sempre que eu quiser chamar uma função arrow preciso armazenar ela em uma const

dobro = (a) => {
  return 2 * a;
}

// refatorando novamente a mesma função

dobro = a => 2 * a; // return implicito

console.log(dobro(5));

let ola = function () {
  return 'Óla';
};

// refatorando a função ola

ola = () => 'Óla';
ola = _ => 'Óla'; // possui parametro que não vou usar, basta ignorar o parametro.

console.log(ola());