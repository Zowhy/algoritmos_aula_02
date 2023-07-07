
const numeroAleatorio = Math.floor(Math.random() * 100) + 1;
let tentativas = 0;
let acertou = false;

console.log("Bem-vindo ao Jogo de Adivinhação!");

while (!acertou) {
  let palpite = parseInt(prompt("Digite seu palpite (entre 1 e 100):"));
  tentativas++;

  if (palpite === numeroAleatorio) {
    acertou = true;
    console.log("Parabéns! Você acertou o número em " + tentativas + " tentativas.");
  } else if (palpite < numeroAleatorio) {
    console.log("O número correto é maior. Tente novamente!");
  } else {
    console.log("O número correto é menor. Tente novamente!");
  }
}