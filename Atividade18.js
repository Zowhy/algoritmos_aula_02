
var num1 = parseInt(prompt("Digite o primeiro número inteiro:"));
var num2 = parseInt(prompt("Digite o segundo número inteiro:"));

var menor = num1;
var maior = num2;
if (num1 > num2) {
  menor = num2;
  maior = num1;
}

console.log("Números pares entre " + menor + " e " + maior + ":");
for (var i = menor; i <= maior; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}
