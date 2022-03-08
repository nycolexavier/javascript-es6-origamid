function areQuadrado(lado) {
  return lado * lado;
}

console.log(areQuadrado(10));

function pi() {
  return 3.14;
}
var total = 5 * pi();

console.log(total);

function imc(peso, altura) {
  var imc = peso / (altura + altura);
  return imc;
}

console.log(imc(80, 1.8));

function corFavorita(cor) {
  if (cor === "azul") {
    return "Eu gosto do céu";
  } else if (cor === "verde") {
    return "Eu gosto do mato";
  } else {
    return "Eu não gosto de cores";
  }
}

addEventListener("click", function () {
  console.log("clicou");
});

function imc2(peso, altura) {
  const imc = peso / altura ** 2;
  console.log(imc);
}

imc2(50, 1.8);
console.log(imc2(80, 1.8)); // retorna o valor e o underfine porque return não foi o definido

function terceiraIdade(idade) {
  if (typeof idade !== "number") {
    return "Informe a sua idade";
  } else if (idade >= 60) {
    console.log("É idoso");
  } else {
    console.log('ss')
  }
}

console.log(terceiraIdade(60));
