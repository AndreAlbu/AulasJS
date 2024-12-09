function maiorNumero(num1, num2) {
  return num1 >= num2 ? num1 : num2;
}

const maiorNumero2 = (num1, num2) => (num1 >= num2 ? num1 : num2);

const numero1 = 100;
const numero2 = 15;

console.log(maiorNumero(numero1, numero2));
console.log(maiorNumero2(numero1, numero2));
