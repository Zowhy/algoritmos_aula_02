let numero = 1;
while(numero < 100){
    if (numero % 5 === 0 && numero % 7 === 0){
        console.log("O numero " + numero + " divisivel por 5 e 7" )
        break;
    }
    numero++;

}
