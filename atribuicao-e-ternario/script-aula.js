var numero = 20;
var numer2 = 10;

numero %= numer2;
numero += 10; // número = numero + 10
console.log(numero);
console.log(numer2);

var idade = 20;
var naoPossuiDiabetes = false;

var podeBeber;
podeBeber = idade >= 18 && naoPossuiDiabetes ? "Pode beber" : "Não pode beber";

console.log(podeBeber);

var possuiFaculdade = true;

if (possuiFaculdade) console.log("Sim possui");
console.log("Isso mesmo");
