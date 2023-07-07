const numero = parseInt(prompt("Digite um número inteiro positivo:"));
let verificar = true;
if(numero === 1){
    verificar = false;
} else if (numero > 1){
    for (let i = 2; i <numero; i++){
        if (numero % i === 0) {
            verificar = false;
            break;
        
        }
    }
}