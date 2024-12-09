const form = document.querySelector(".form");
const avaliacao = document.querySelector(".avaliacao");

form.addEventListener("submit", function (evento) {
  evento.preventDefault();

  const pesoValor = form.querySelector("#input-peso");
  const alturaValor = form.querySelector("#input-altura");

  const peso = Number(pesoValor.value);
  const altura = Number(alturaValor.value);

  if (peso > 250 || !peso) {
    setResultado("Peso inválido", false);
    return;
  }

  if (altura > 2.3 || !altura) {
    setResultado("Altura inválida", false);
    return;
  }

  const imc = calcula_imc(peso, altura);

  const nivel = verificaNivel(imc);

  const msg = `Seu IMC é ${imc} (${nivel})`;

  setResultado(msg, true);

  console.log(imc, nivel);
});

function calcula_imc(peso, altura) {
  let resultado_imc = 0;

  resultado_imc = peso / (altura * altura);

  return resultado_imc.toFixed(2);
}

function criaP() {
  const p = document.createElement("p");
  return p;
}

function verificaNivel(imc) {
  const nivel = [
    "Abaixo do peso",
    "Peso normal",
    "Sobrepeso",
    "Obseidade grau 1",
    "Obseidade grau 2",
    "Obseidade grau 3",
  ];

  if (imc >= 39.9) return nivel[5];
  if (imc >= 34.9) return nivel[4];
  if (imc >= 29.9) return nivel[3];
  if (imc >= 24.9) return nivel[2];
  if (imc >= 18.5) return nivel[1];
  if (imc <= 18.5) return nivel[0];
}

function setResultado(msg, isvalid) {
  const resultado = document.querySelector(".avaliacao");
  resultado.innerHTML = "";

  const p = criaP();

  if (isvalid) {
    p.classList.add("paragrafo-resultado-correto");
  } else {
    p.classList.add("paragrafo-resultado-errado");
  }

  p.innerHTML = msg;
  resultado.appendChild(p);
}

function recebeEventoForm(evento) {
  evento.preventDefault();

  let imc = calcula_imc(peso, altura);

  console.log(imc);

  form.addEventListener("submit", recebeEventoForm);
}
