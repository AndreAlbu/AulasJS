/* 
const dataAtual = new Date(); //Data atual
//console.log(dataAtual.toString());

const tresHoras = 60 * 60 * 3 * 1000;
const dataEspec = new Date(0 + tresHoras); //01/01/1070 Timestamp uniz ou época unix
//console.log(dataEspec.toString());

const niver = new Date(1999, 9, 16, 9, 15, 500); //a, m, d, h, M, s, ms
//console.log(niver.toString());

console.log("Dia:", dataAtual.getDate());
console.log("Mês:", dataAtual.getMonth() + 1);
console.log("Ano:", dataAtual.getFullYear());
console.log("Hora:", dataAtual.getHours());
console.log("Minuto:", dataAtual.getMinutes());
console.log("Segundos:", dataAtual.getSeconds());
console.log("Ms:", dataAtual.getMilliseconds());
console.log("Dia semana:", dataAtual.getDay());
*/

function zeroEsquerdo(valor) {
  return valor >= 10 ? valor : `0${valor}`;
}

function formataData(data) {
  const dia = zeroEsquerdo(data.getDate());
  const mes = zeroEsquerdo(data.getMonth() + 1);
  const ano = zeroEsquerdo(data.getFullYear());
  const hora = zeroEsquerdo(data.getHours());
  const min = zeroEsquerdo(data.getMinutes());
  const seg = zeroEsquerdo(data.getSeconds());

  return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`;
}

const data = new Date();
const dataBrasil = formataData(data);
console.log(dataBrasil);
