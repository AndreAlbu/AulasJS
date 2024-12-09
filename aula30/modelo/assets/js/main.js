function textoDiaSemana(diaSemana) {
  const diaSemanaTexto = [
    "domingo",
    "segunda-feira",
    "terça-feira",
    "quarta-feira",
    "quinta-feira",
    "sexta-feira",
    "sábado",
  ];

  return diaSemanaTexto[diaSemana];
}

function formataZero(valor) {
  return valor >= 10 ? valor : `0${valor}`;
}

function textoMes(mes) {
  const mesTexto = [
    "janeiro",
    "fevereiro",
    "março",
    "abril",
    "maio",
    "junho",
    "julho",
    "agosto",
    "setembro",
    "outubro",
    "novembro",
    "dezembro",
  ];

  return mesTexto[mes];
}

function formataData(data) {
  const dia = data.getDay();
  const mes = data.getMonth() + 1;
  const ano = data.getFullYear();
  const hora = formataZero(data.getHours());
  const minu = formataZero(data.getMinutes());

  const diaSemana = textoDiaSemana(dia);
  const mesTexto = textoMes(mes);

  return `${diaSemana}, ${dia} de ${mesTexto} de ${ano} ${hora}:${minu}`;
}

const escreveDataTela = document.querySelector(".informa-hora");

const dataAtual = new Date();

escreveDataTela.innerHTML = formataData(dataAtual);

/*
const h1 = document.querySelector(".container h1");
const data = new Date();

h1.innerHTML = data.toLocaleDateString("pt-BR", {dateStyle: "full", timeStyle: "short"});
*/
