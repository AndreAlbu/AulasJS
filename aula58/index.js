//Função construtora -> objetos
//Função fabrica -> objetos
//Construtora -> Pessoa (new)

function Pessoa(nome, sobrenome) {
  //Atributos e métodos privados
  const ID = 1234;

  //Atributos ou métodos públicos
  this.nome = nome;
  this.sobrenome = sobrenome;

  this.metodo = function () {
    console.log(this.nome + ": teste método");
  };
}

const p1 = new Pessoa("Andre", "Luis");
const p2 = new Pessoa("Burra cega");
console.log(p1);
p1.ID;
console.log(p1.nome);
p2.metodo();
