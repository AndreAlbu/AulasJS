function recursiva(max, limite) {
  console.log(max);

  if (max >= limite) return;

  max++;
  recursiva(max, limite);
}

recursiva(0, 10);
