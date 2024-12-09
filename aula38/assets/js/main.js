const paragrafos = document.querySelector(".paragrafos");

const tagP = paragrafos.querySelectorAll("p");

const estilosBody = getComputedStyle(document.body);
const backgroundBody = estilosBody.backgroundColor;

console.log(backgroundBody);

for (let ps of tagP) {
  ps.style.backgroundColor = backgroundBody;
  ps.style.color = "#fff";
  ps.style.borderRadius = "5px";
  ps.style.fontSize = "17px";
}
