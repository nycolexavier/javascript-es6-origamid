var possuiGraduacao = false;
var possuiDoutorado = false;

if (possuiGraduacao) {
  console.log("É verdadeiro");
} else if (possuiDoutorado) {
  console.log("É falso");
} else {
  console.log("Não possui nada");
}

var nome = "André";

if (nome) {
  console.log(nome);
} else {
  console.log("Nome não existe");
}

if (5 - 5 && 5 + 5) {
  console.log();
}

var corFavorita = "Azul";

switch (corFavorita) {
  case "Azul":
    console.log("Olhe para o céu");
    break;
  default:
    console.log("Feche os olhos");
}

// Exercício
var idade = 19;

if (idade > 20) {
  console.log("É maior");
} else if (idade === 20) {
  console.log("É igual");
} else {
  console.log("É menor");
}

var expressao = 5 - 2 && 5 - " " && 5 - 2;
console.log(expressao);

var nome = "André";
var idade = 28;
var possuiDoutoradoo = false;
var empregoFuturo;
var dinheiroNaConta = 0;

console.log(
  !!nome,
  !!idade,
  !!possuiDoutoradoo,
  !!empregoFuturo,
  !!dinheiroNaConta
);

var brasil = 207;
var china = 1340;

console.log(brasil == china);

if ("Gato" === "gato" && 5 > 2) {
  console.log("Verdadeiro");
} else {
  console.log("Falso");
}

// O que irá aparecer no console?
if ("Gato" === "gato" && 5 > 2) {
  console.log("Verdadeiro");
} else {
  console.log("Falso");
}

// O que irá aparecer no console?
if ("Gato" === "gato" || 5 > 2) {
  console.log("Gato" && "Cão");
} else {
  console.log("Falso");
}
