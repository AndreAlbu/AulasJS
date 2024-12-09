(function () {
  function criaCalculadora() {
    return {
      display: document.querySelector(".display"),

      inicia() {
        this.clicaBotoes();
        this.precionaEnter();
      },

      precionaEnter() {
        this.display.addEventListener("keyup", (e) => {
          if (e.keycode === 13) {
            this.realizaConta();
          }
        });
      },

      clicaBotoes() {
        document.addEventListener("click", (e) => {
          const el = e.target;

          console.log(el.innerText);

          if (el.classList.contains("btn-num")) {
            this.btnParaDisplay(el.innerText);
          }

          if (el.classList.contains("btn-clear")) {
            this.limpaDisplay();
          }

          if (el.classList.contains("btn-del")) {
            this.apagaValor();
          }

          if (el.classList.contains("btn-eq")) {
            this.realizaConta();
          }
        });
      },

      btnParaDisplay(valor) {
        this.display.value += valor;
      },

      limpaDisplay() {
        this.display.value = "";
      },

      apagaValor() {
        this.display.value = this.display.value.slice(0, -1);
      },

      realizaConta() {
        let conta = this.display.value;

        console.log(conta);

        try {
          conta = eval(conta);

          if (!conta) {
            alert("Conta inválida!");
            this.limpaDisplay();
            return;
          }

          this.display.value = String(conta);
          conta = 0;
        } catch (e) {
          alert("Conta inválida!");
          this.limpaDisplay();
        }
      },
    };
  }

  const calculadora = criaCalculadora();
  calculadora.inicia();
})();
