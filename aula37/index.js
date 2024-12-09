const nomes = ["Andre", "Luis", "Ze", "Nossila", "Babiel"];

// for (let i = 0; i < nome.length; i++) {
//   console.log(nome[i]);
// }

// for (let i in nome) {
//   console.log(nome[i]);
// }

// for (let valor of nomes) {
//   console.log(valor);
// }

nomes.forEach(function (valor, index, array) {
  console.log(valor, index, array);
});

//For clássico - Geralmente com iteráveis (array ou strings)
//For in - Retorna o índece ou chave (string, array ou objetos)
//For of - Retorna o valor em si (iteráveis, arrays ou strings)
