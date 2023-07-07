
let numero = parseInt(prompt("Digite um número inteiro positivo:"));
let ehPrimo = true;

if (numero < 2) {
  ehPrimo = false;
} else {
  for (let i = 2; i <= Math.sqrt(numero); i++) {
    if (numero % i === 0) {
      ehPrimo = false;
      break;
    }
  }
}

if (ehPrimo) {
  console.log(numero + " é um número primo.");
} else {
  console.log(numero + " não é um número primo.");
}
