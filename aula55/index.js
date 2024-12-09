// IIFE -> Immediately invoked function expression
// (function(){
//     codigo aqui;
// })();

(function () {
  const sobrenome = "Luis";

  function criaNome(nome) {
    return nome + " " + sobrenome;
  }

  function falaNome() {
    console.log(criaNome("Andre"));
  }

  falaNome();
})();
