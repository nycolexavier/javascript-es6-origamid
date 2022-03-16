// Crie uma array com os anos que o Brasil ganhou a copa
// 1959, 1962, 1970, 1994, 2002
var brasilCampeao = [1959, 1962, 1970, 1994, 2002];

// Interaja com o array utilziando um loop, para mostrar
// no console a seguinte mensagem, `O Brasil ganhou a copa de ${ano}`
for (var i = 0; i < brasilCampeao.length; i++) {
  console.log(`O Brasil ganhou a copa de ${brasilCampeao[i]}`);
}

// Interaja com um loop nas cidades abaixo e pare ao chegar em Belo Horizonte

var cidades = ["Cacoal", "Curitiba", "Belo Horizonte", "Brasília"];
for (var cidade = 0; cidade < cidades.length; cidade++) {
  console.log(cidades[cidade]);
  if (cidades[cidade] === "Belo Horizonte") {
    break;
  }
}

// Coloque a última fruta do array acima em uma variável,
// sem remover a mesma do array

var ultimaCidade = cidades[cidades.length - 1];
