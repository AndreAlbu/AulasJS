// let i = 0;

// while (i <= 10) {
//   console.log(i);
//   i++;
// }

function random(min, max) {
  const r = Math.random() * (max - min) + min;
  return Math.floor(r);
}

let rand = random(1, 50);
let tentativa = 0;
rand = 10;

while (rand !== 10) {
  tentativa++;
  rand = random(1, 50);
  console.log(rand);
}
console.log(`Quantidade de tentativas: ${tentativa}`);

do {
  tentativa++;
  rand = random(1, 50);
  console.log(rand);
} while (rand !== 10);

console.log(`Quantidade de tentativas: ${tentativa}`);
