// console.log('Olá');

// modo antigo de declarar uma variavel ES5
var a = 0;

//  Modo de escrito do novo padrão ES6
// variável
let b = 2;

// Contante
const c = 4;

// console.log(a);

// verifique se um dado número é positivo ou negativo

let numero = 5;

if (numero > 0) {  // quando é verdadeiro
  console.log('É positivo');
} else { // quando é falso
  console.log('É negativo');
}

// Verifique se um valor é par ou ímpar

let valor = 10

if (valor % 2 === 0) {
  console.log('É par');
} else {
  console.log('É ímpar');
}

// Determine qual é o maior entre três números

let num1 = 10;
let num2 = 5;
let num3 = 8;
let maior = 0;

if (num1 >= num2 && num1 >= num3) {
  maior = num1;
} else if (num2 >= num1 && num2 >= num3) {
   maior = num2;
} else {
  maior = num3;
}

console.log('O maior número é: ' + maior);

// Verificar se um ano é bissexto

let ano = 2020;

if ((ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0)) {
  console.log('O ano é bissexto');
} else {
  console.log('O ano não é bissexto');
}


// Estruturas de repetição

// while = enquanto

// imprimir os números de 1 a 100
let contador = 100;

while(contador <= 1){
  console.log(contador);
  contador--;
}

// perguntar ao usuário um número entre 1 e 10

// let num4;

// do {
//   num4 = parseInt(prompt('Digite um número entre 1 e 10'));
// } while (num4 < 1 || num4 > 10);

// console.log('Você digitou o número ' + num4);


// Repetição utilizando a estrutura for
// executando soma

let soma = 0;

for(let i = 1; i <= 10; i++){
  soma += i;
}

console.log('O valor da soma é: ' + soma);


// Iteração sobre array usando for

const numeros = [1, 2, 3, 4, 5];

for(let num of numeros){
  console.log(num);
}

const pessoa = {
  nome: 'João',
  idade: 25,
  cidade: 'Nova Andradina'
};

for(let atributo in pessoa){
  console.log(atributo + " : " + pessoa[atributo]);
}










