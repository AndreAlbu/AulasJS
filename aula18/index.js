function criaPessoa(nome, sobrenome, idade){
    return {
        nome: nome,
        sobrenome: sobrenome,
        idade: idade
    };
}

const pessoa1 = criaPessoa("Andre", "Luis", 25);
const pessoa2 = criaPessoa("Joyce", "Sousa", 25);

//console.log(pessoa1.nome, pessoa2.nome);

const pessoa = {

    nome: "Andre",
    sobrenome: "Luiz",
    idade: 25,

    mostrar () {
        console.log(this.nome, this.sobrenome, "é a pessoa");
    }
};

pessoa.mostrar();