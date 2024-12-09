const valorEntrada = Number(prompt("Digite um número: "));
const valorTitulo = document.getElementById("numero-titulo");
const valorTextoDiv = document.getElementById("texto");

valorTitulo.innerHTML = valorEntrada;
valorTextoDiv.innerHTML = `<p>Raiz quadrada: ${Math.sqrt(valorEntrada)}.</p>`;
valorTextoDiv.innerHTML += `<p>${valorEntrada} é inteiro: ${Number.isInteger(valorEntrada)}.</p>`;
valorTextoDiv.innerHTML += `<p>É NaN: ${Number.isNaN(valorEntrada)}</p>`;
valorTextoDiv.innerHTML += `<p>Arredondando para baixo: ${Math.floor(valorEntrada)}</p>`
valorTextoDiv.innerHTML += `<p>Arredondando para cima: ${Math.ceil(valorEntrada)}</p>`
valorTextoDiv.innerHTML += `<p>Com duas casas decimais: ${valorEntrada.toFixed(2)}</p>`