const pessoa = {
  saudacao: 'Bom dia',
  falar() {
    console.log(this.saudacao);
  }
};

pessoa.falar();
const falar = pessoa.falar;
falar();

const falarDePessoa = pessoa.falar.bind(pessoa);
falarDePessoa();

// Continuando com os exemplos de this e bind

function pessoa() {
  this.idade = 0

  const self = this;
  setInterval(function() {
  self.idade++
  console.log(self.idade);
  }, 1000);
};



new pessoa