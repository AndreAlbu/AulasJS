function* geradora1() {
  yield "Valor 1";

  yield "Valor 2";

  yield "Valor 3";
}
// const g1 = geradora1();

// console.log(g1.next());
// console.log(g1.next());
// console.log(g1.next());
// console.log("==================");
// const g2 = geradora1();
// for (let valor of g2) {
//   console.log(valor);
// }

function* geradora2() {
  let i = 0;

  while (1) {
    yield i;
    i++;
  }
}

const g2 = geradora2();
//console.log(g2.next().value);

// for (let valor of g2) {
//   console.log(valor);
// }

function* geradora3() {
  yield 1;
  yield 2;
  yield 3;
}

function* geradora4() {
  yield* geradora3();
  yield 4;
  yield 5;
}

const g4 = geradora4();

// for (let valor of g4) {
//   console.log(valor);
// }

function* geradora5() {
  yield function () {
    console.log("yield 1");
  };

  yield function () {
    console.log("yield 2");
  };

  return function () {
    console.log("yield return");
  };
}

const g5 = geradora5();

const func1 = g5.next().value;
const func2 = g5.next().value;
const func3 = g5.next().value;

func1();
func2();
func3();
