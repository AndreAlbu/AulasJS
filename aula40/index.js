const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let numero of numeros) {
  if (numero % 2 === 0) {
    continue;
  } else if (numero === 7) {
    console.log("achou");
    break;
  } else {
    console.log(numero);
  }
}
