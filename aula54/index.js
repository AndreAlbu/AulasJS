function geraTempo() {
  return Math.floor(Math.random() * (5000 - 1) + 1);
}

function f1(callback) {
  const tempo = geraTempo();
  setTimeout(function () {
    const tempo = geraTempo();
    console.log("funcao: f1 | tempo: ", tempo);
    if (callback) callback();
  }, tempo);
}

function f2(callback) {
  const tempo = geraTempo();
  setTimeout(function () {
    console.log("funcao: f2 | tempo: ", tempo);
    if (callback) callback();
  }, tempo);
}

function f3(callback) {
  const tempo = geraTempo();
  setTimeout(function () {
    console.log("funcao: f3 | tempo: ", tempo);
    if (callback) callback();
  }, tempo);
}

// f1(function () {
//   f2(function () {
//     f3(function () {
//       console.log("Funções");
//     });
//   });
// });

f1(f1callback);

function f1callback() {
  f2(f2callback);
}

function f2callback() {
  f3(f3callback);
}

function f3callback() {
  console.log("funcoes");
}
