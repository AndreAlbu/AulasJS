const alunos = ["Luiz", "Maria", "João"];
console.log(alunos);
console.log(alunos[0]);
console.log(alunos.indexOf("Luiz"))

alunos[0] = "Andre";
console.log(alunos);

alunos[alunos.length] = "Nossila";
console.log(alunos);

alunos.push("Jose");
console.log(alunos);

alunos.unshift("Kaio");
console.log(alunos);

//console.log(alunos.reverse());

const removido_final = alunos.pop(); //Remove do final
console.log(alunos);
console.log(removido_final);

const removido_inicio = alunos.shift();
console.log(alunos);
console.log(removido_inicio);

delete alunos[0];
console.log(alunos);
console.log(alunos[0]);

alunos[0] = "Miguel";
console.log(alunos);

alunos.push("Luiz");
console.log(alunos);

console.log(alunos.slice(0, 2))