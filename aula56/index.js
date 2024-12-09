//Factory function (Função fábrica)
function criaPessoa(nome, sobrenome, a, p) {
  return {
    nome,
    sobrenome,

    local: "aula",

    //Getter
    get nomeCompleto() {
      return `${this.nome} ${this.sobrenome}`;
    },

    //Setter
    set nomeCompleto(valor) {
      valor = valor.split(" ");
      this.nome = valor.shift();
      this.sobrenome = valor.join(" ");
    },

    fala(assunto) {
      return `${nome} esta falando sobre ${assunto} na ${this.local}`;
    },

    altura: a,
    peso: p,

    imc() {
      const indice = this.peso / this.altura ** 2;
      return indice.toFixed(2);
    },
  };
}

const p1 = criaPessoa("Andre", "Luis", 1.83, 72);
console.log(p1.nomeCompleto);
console.log(p1.imc());
console.log(p1.fala("JS"));
p1.nomeCompleto = "Nossila Mendes da Silva";
console.log(p1.nomeCompleto);

// const p2 = criaPessoa("Nossila", "Flor", 1.87, 90);
// console.log(p2.imc());
