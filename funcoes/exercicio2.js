const assert = require('assert');

const tipoTriangulo = (ladoA, ladoB, ladoC) => {
  if (ladoA === ladoB && ladoB === ladoC) {
    return 'Esse triangulo é Equilátero!'
  } else if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC) {
    return 'Esse triangulo é  Isósceles!'
  }
  return 'Esse triangulo é Escaleno!'
};

console.log(tipoTriangulo(10, 10, 8));

assert.strictEqual(tipoTriangulo(10, 10, 10), 'Esse triangulo é Equilátero!');
assert.strictEqual(tipoTriangulo(10, 10, 9), 'Esse triangulo é  Isósceles!');
assert.strictEqual(tipoTriangulo(10, 8, 9), 'Esse triangulo é Escaleno!');