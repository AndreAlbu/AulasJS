(function () {
  function Calculadora() {
    this.display = document.querySelector(".display");
    let verificaInicio = false;

    this.inicia = function () {
      this.display.value = "0";
      verificaInicio = true;
      this.clicaBotoes();
      this.capturaEnter();
    };

    this.btnParaDisplay = function (valor) {
      this.display.value += valor;
      this.display.focus();
    };

    this.limpaDisplay = function () {
      this.display.value = "0";
      verificaInicio = true;
    };

    this.apagaValorDisplay = function () {
      this.display.value = this.display.value.slice(0, -1);
    };

    this.realizaConta = function () {
      let valor = this.display.value;
      let conta = 0;

      try {
        conta = eval(valor);
        if (!conta) {
          this.display.value = "Erro";
          setTimeout(() => {
            this.limpaDisplay();
          }, 1000);
        }

        this.display.value = conta;
      } catch (e) {
        this.display.value = "Erro";
        setTimeout(() => {
          this.limpaDisplay();
        }, 1000);
      }

      console.log(conta);
    };

    this.capturaEnter = () => {
      document.addEventListener("keypess", function (e) {
        if (e.keyCode !== 13) return;
        this.realizaConta();
      });
    };

    this.clicaBotoes = function () {
      document.addEventListener("click", (e) => {
        const el = e.target;

        if (verificaInicio) {
          verificaInicio = false;

          this.display.value = "";
        }

        if (el.classList.contains("btn-num")) {
          console.log(el.innerText);
          this.btnParaDisplay(el.innerText);
        }

        if (el.classList.contains("btn-clear")) {
          console.log("Limpando display");
          this.limpaDisplay();
        }

        if (el.classList.contains("btn-del")) {
          console.log("Apagando último valor");
          this.apagaValorDisplay();
        }

        if (el.classList.contains("btn-eq")) {
          this.realizaConta();
        }
      });
    };
  }

  const criaCalculadora = new Calculadora();
  criaCalculadora.inicia();
})();

// (function () {
//   function criaCalculadora() {
//     return {
//       display: document.querySelector(".display"),

//       inicia() {
//         this.clicaBotoes();
//         this.precionaEnter();
//       },

//       precionaEnter() {
//         this.display.addEventListener("keyup", (e) => {
//           if (e.keycode === 13) {
//             this.realizaConta();
//           }
//         });
//       },

//       clicaBotoes() {
//         document.addEventListener("click", (e) => {
//           const el = e.target;

//           console.log(el.innerText);

//           if (el.classList.contains("btn-num")) {
//             this.btnParaDisplay(el.innerText);
//           }

//           if (el.classList.contains("btn-clear")) {
//             this.limpaDisplay();
//           }

//           if (el.classList.contains("btn-del")) {
//             this.apagaValor();
//           }

//           if (el.classList.contains("btn-eq")) {
//             this.realizaConta();
//           }
//         });
//       },

//       btnParaDisplay(valor) {
//         this.display.value += valor;
//       },

//       limpaDisplay() {
//         this.display.value = "";
//       },

//       apagaValor() {
//         this.display.value = this.display.value.slice(0, -1);
//       },

//       realizaConta() {
//         let conta = this.display.value;

//         console.log(conta);

//         try {
//           conta = eval(conta);

//           if (!conta) {
//             alert("Conta inválida!");
//             this.limpaDisplay();
//             return;
//           }

//           this.display.value = String(conta);
//           conta = 0;
//         } catch (e) {
//           alert("Conta inválida!");
//           this.limpaDisplay();
//         }
//       },
//     };
//   }

//   const calculadora = criaCalculadora();
//   calculadora.inicia();
// })();
