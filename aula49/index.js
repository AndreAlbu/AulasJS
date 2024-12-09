//Declaração de função (Fuction hoisting) vai ser elevada para o topo
function falaOi() {
  console.log("Oi");
}
falaOi();

//Fisrt-class objects (Objetos de primeira classe)
//Function expression
const souUmDado = function () {
  console.log("Sou um dado.");
};
souUmDado();

//Arrow function
const funcaoArrow = () => {
  console.log("Sou uma arrow function");
};
funcaoArrow();

//Função dentro de objetos
const func = {
  falar() {
    console.log("Estou falando...");
  },
};
func.falar();
