const pessoas = {
  nome: "Andre",
  sobrenome: "Luis",
  idade: 25,
  endereco: {
    cidade: "Juazeiro do Norte",
    estado: "Ceara",
  },
};

const { nome: n, sobrenome, idade: ida } = pessoas;
console.log(n, sobrenome, ida);

const {
  endereco: { cidade, estado },
} = pessoas;
console.log(cidade, estado);

const { nome, ...resto } = pessoas;
console.log(nome, resto);
