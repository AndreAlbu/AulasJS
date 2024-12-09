function relogioGlobal() {
  const relogio = document.querySelector(".relogio");
  const historico = document.querySelector(".historico");

  let segun = 0;
  let timer;
  let horaAtual = 0;

  function iniciarHora(segundos) {
    let hora = new Date(segundos * 1000);

    return hora.toLocaleTimeString("pt-BR", {
      hour12: false,
      timeZone: "UTC",
    });
  }

  function iniciaRelogio() {
    timer = setInterval(function () {
      horaAtual = iniciarHora(segun);
      relogio.innerHTML = horaAtual;
      segun++;
    }, 1000);
  }

  function mostraHistoricoCronometro() {
    const lerCronometroSalvo = localStorage.getItem("cronometroSalvo");
    const cronometroSalvo = JSON.parse(lerCronometroSalvo);

    console.log(cronometroSalvo);

    for (let cronometro of cronometroSalvo) {
      historico.innerHTML += `<p>${cronometro}</p>`;
    }
  }

  document.addEventListener("click", function (e) {
    const elemento = e.target;

    if (elemento.classList.contains("btn-iniciar")) {
      relogio.classList.remove("pausado");
      clearInterval(timer);
      iniciaRelogio();
    }

    if (elemento.classList.contains("btn-pausar")) {
      relogio.classList.add("pausado");

      const arrayCronometrosSalvos = [];

      if (horaAtual !== 0) {
        historico.innerHTML += `<p>${horaAtual}</p>`;
        arrayCronometrosSalvos.push(horaAtual);
      }
      const tempoSalvo = JSON.stringify(arrayCronometrosSalvos);
      localStorage.setItem("cronometroSalvo", tempoSalvo);
      clearInterval(timer);
    }

    if (elemento.classList.contains("btn-zerar")) {
      clearInterval(timer);
      relogio.classList.remove("pausado");
      relogio.innerHTML = "00:00:00";
      historico.innerHTML = "";
      segun = 0;
      horaAtual = 0;
    }
  });
  mostraHistoricoCronometro();
}

relogioGlobal();
