// Variáveis, reponsáveis por guardar dados na memórioa.
//  Inicia com a palavra var, let ou const
//  evitam repetições

var nome = "André";
var idade = 28;
var possuiFaculdade = true;
console.log(nome, idade, possuiFaculdade);

var preco = 25;
var totalComprado = 5;
var totalPreco = totalComprado + preco;

console.log(totalPreco);

// declarar várias
var sobrenome = "Rafael",
  cidade = "Rio";

console.log(sobrenome, cidade);

// Variável sem valor

var semDefinir;
console.log(semDefinir);

// console.log(aindaNaoDefinir);

// Hoisting
var bebida;
console.log(bebida);
bebida = "água";
console.log(bebida);

var time = "Vasco";
time = "Flamengo";
console.log(time);

// Exercício
var nome = "Nycole";
var idade = 19;
var bebida;
bebida = "água";

var casa, apartamento, ventilador, computador, tablet;

console.log(nome, idade, bebida);
