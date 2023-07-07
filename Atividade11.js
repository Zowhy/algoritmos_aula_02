let numero = 1;
let found = false;
while (!found){
    if(numero % 2 === 0 && numero % 3 === 0 && numero % 5 === 0){
        found= true;
    } else{
        numero++;
    }
}
console.log("O menor numero divisivel por 2, 3 e 5 é:" +numero);