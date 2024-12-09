//arguments sustenta todos os argumentos enviados

// function funcao() {
//   let soma = 0;
//   const arg = arguments;

//   for (let i = 0; i < arg.length; i++) {
//     soma += arg[i];
//   }

//   console.log(soma);
// }

// funcao(1, 2, 3, 4, 5, 6, 7, 8, 9, "a");

// function soma(a, b = 2, c = 4) {
//   console.log(a + b + c);
// }

// soma(2, undefined, 10);

// function funcao({ nome, sobrenome, idade }) {
//   console.log(nome);
//   console.log(sobrenome);
//   console.log(idade);
// }

// funcao({ nome: "Andre", sobrenome: "Luis", idade: 25 });

// function funcao([valor1, valor2, valor3]) {
//   console.log(valor1);
//   console.log(valor2);
//   console.log(valor3);
// }

// let array = [1, 2, 3];

// funcao(array);

function conta(operador, acumulador, ...numeros) {
  for (let num of numeros) {
    if (operador === "+") acumulador += num;
    if (operador === "-") acumulador -= num;
    if (operador === "*") acumulador *= num;
    if (operador === "/") acumulador /= num;
  }

  console.log(acumulador);
}

conta("*", 0, 1, 2, 3, 4, 5);
