
var quantidadeNotas = parseInt(prompt("Quantas notas você deseja informar?"));
var notaTotal = 0;

for (var i = 0; i < quantidadeNotas; i++) {
  var nota = +prompt("Digite a nota " + (i + 1) + ":");
  notaTotal += nota;
}

var media = notaTotal / quantidadeNotas;
var notaFinal = media | 0;

console.log("A média final das notas é: " + notaFinal);
