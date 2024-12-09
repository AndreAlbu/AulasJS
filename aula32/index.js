/*
let a = "A";
let b = "B";
let c = "C";

const letras = [b, c, a];

[a, b, c] = letras;

console.log(a, b, c);
*/

/*
const numeros = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000];

const [um, dois, tres, ...resto] = numeros;

console.log(um, dois, tres);
console.log(resto);
*/

const numeros = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(numeros[1][2]);

const [lista1, lista2, lista3] = numeros;

console.log(lista2[2]);
