function check(){
    let letra = prompt("Digite um caracter.");
    if(
        letra === 'a' || letra === 'A' || letra === 'e' || letra === 'E' || letra === 'i' || letra === 'I' || letra === 'o' || letra === 'O' || letra === 'u' || letra === 'U'
    ){
        console.log("Vogal");
    } else {
        console.log("Consoante");
    }
}
check()