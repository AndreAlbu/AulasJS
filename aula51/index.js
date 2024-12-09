// document.addEventListener("click", function () {
//   document.body.style.backgroundColor = "red";
// });

function criaPessoa(nome, sobrenome, idade) {
  return { nome: nome, sobrenome: sobrenome, idade: idade };
}

const p1 = criaPessoa("Andre", "Luis", 10);
const p2 = criaPessoa("Luis", "Eduardo", 23);

//////////////////////////////////////////////////////////////

function criaMultiplicador(multiplicador) {
  return function (n) {
    return n * multiplicador;
  };
}

const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);
const quadriplica = criaMultiplicador(4);

console.log(duplica(2));
console.log(triplica(2));
console.log(quadriplica(2));
