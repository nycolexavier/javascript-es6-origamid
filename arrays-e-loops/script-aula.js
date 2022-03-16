//var videoGames = ["Switch", "PS4", "XBOX", "3DS"];

// for (let numero = 0; numero < 4; numero++) {
//   console.log(numero);
// }

// var i = 0;
// while (i <= 10) {
//   console.log(i);
//   i++;
// }

var videoGames = ["Switch", "PS4", "XBOX", "3DS"];

for (let item = 0; item < videoGames.length; item++) {
  if (videoGames[item] === "PS4") {
    break;
  }
  console.log(videoGames[item]);
}

var cidades = ["Cacoal", "Curitiba", "Belo Horizonte", "Brasília"];

cidades.forEach(function (item, index, array) {
  console.log(item, index, array);
});

var numero = 0;
var maximo = 50;
for (; numero < maximo; ) {
  console.log(numero);
  numero++;
}

