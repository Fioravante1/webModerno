const assert = require('assert');

const baseExpoente = (base, expoente) => {
  return base ** expoente;
};

console.log(baseExpoente(5, 4));

assert.strictEqual(typeof baseExpoente, 'function');
assert.strictEqual(baseExpoente(2, 3), 8);
assert.strictEqual(baseExpoente(5, 4), 625);