// ? :

const pontuacao = 700;

const nivelUsuario = pontuacao >= 1000 ? "Usuário VIP" : "Usuário normal";

console.log(nivelUsuario);

const corUsuario = null;
const corPadrao = corUsuario || "Branca";

console.log(corPadrao);
