function retornaHora(data) {
  if (data && !(data instanceof Date)) {
    throw new TypeError("Não eh objeto de Date");
  }

  if (!data) {
    data = new Date();
  }

  return data.toLocaleTimeString("pt-BR", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  });
}

try {
  const data = new Date();
  const hora = retornaHora();
  console.log(data);
} catch (error) {
  console.log(error);
} finally {
  console.log("Fim.");
}
