function retornaFuncao(nome) {
  return function () {
    return nome;
  };
}

const funcao = retornaFuncao("Andre");
const funcao2 = retornaFuncao("Luis");

console.dir(funcao);
console.dir(funcao2);
