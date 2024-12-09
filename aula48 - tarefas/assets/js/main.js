const inputTarefa = document.querySelector(".input-nova-tarefa");
const btnTarefa = document.querySelector(".btn-nova-tarefa");
const tarefas = document.querySelector(".lista-tarefas");

function criaLi() {
  const li = document.createElement("li");
  return li;
}

function criaTarefa(inputTarefa) {
  const li = criaLi();

  li.innerText = inputTarefa;
  tarefas.appendChild(li);

  const btnApagar = criaBotaoApagaTarefa(li);
  btnApagar.setAttribute("class", "apagar");

  limpaTarefa();
  salvarTarefas();
}

function limpaTarefa() {
  inputTarefa.value = "";
  inputTarefa.focus();
}

function criaBotaoApagaTarefa(li) {
  li.innerText += " ";
  const btn = document.createElement("button");
  btn.innerText = "Apagar";
  li.appendChild(btn);
  return btn;
}

function criaBotaoFinalizarTarefa(li) {
  li.innerText += " ";
  const btn = document.createElement("button");
  btn.innerText = "Finalizar";
  li.appendChild(btn);
  return btn;
}

function salvarTarefas() {
  const listaTarefas = tarefas.querySelectorAll("li");
  const tarefasSalvas = [];

  for (let tare of listaTarefas) {
    let textoTarefa = tare.innerText;
    textoTarefa = textoTarefa.replace("Apagar", "");
    tarefasSalvas.push(textoTarefa.trim());
  }

  const salvaTarefasJson = JSON.stringify(tarefasSalvas);
  localStorage.setItem("tarefasSalvas", salvaTarefasJson);
}

function lerTarefasSalvas() {
  const tarefasLer = localStorage.getItem("tarefasSalvas");
  const tarefasSalvas = JSON.parse(tarefasLer);

  for (let taref of tarefasSalvas) {
    criaTarefa(taref);
  }
}

function exibiTarefasSalvas() {
  const tarefasSalvas = lerTarefasSalvas();

  for (let taref of tarefasSalvas) {
    criaTarefa(taref);
  }
}

function inputValido(valorTarefa) {
  let verificacoes = false;

  const tarefasLer = localStorage.getItem("tarefasSalvas");
  const tarefasSalvas = JSON.parse(tarefasLer);

  if (!valorTarefa || valorTarefa.trim() === "") return verificacoes;

  for (let verTarefa of tarefasSalvas) {
    if (verTarefa === valorTarefa) return verificacoes;
  }

  return true;
}

inputTarefa.addEventListener("keypress", function (e) {
  if (e.keyCode === 13) {
    const valorTarefa = inputTarefa.value;
    if (inputValido(valorTarefa)) {
      criaTarefa(valorTarefa);
    }
  }
});

btnTarefa.addEventListener("click", function (e) {
  const valorTarefa = inputTarefa.value;

  if (inputValido(valorTarefa)) {
    criaTarefa(valorTarefa);
  }
});

document.addEventListener("click", function (e) {
  const elemento = e.target;

  if (elemento.classList.contains("apagar")) {
    elemento.parentElement.remove();
    salvarTarefas();
  }
});

lerTarefasSalvas();
