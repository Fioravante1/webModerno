const divDivisor = (dividendo, divisor) => {
  return `Resultado é ${Math.floor(dividendo / divisor)} e o Resto da divisão é ${dividendo % divisor}`
};

console.log(divDivisor(100, 50));