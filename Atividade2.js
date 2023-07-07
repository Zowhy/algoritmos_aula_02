function converterNota(nota) {
    if (nota >= 90) {
      return 'A';
    } else if (nota >= 80) {
      return 'B';
    } else if (nota >= 70) {
      return 'C';
    } else if (nota >= 60) {
      return 'D';
    } else {
      return 'F';
    }
  }
  var nota = 85;
var conceito = converterNota(nota);
console.log('A nota ' + nota + ' é equivalente ao conceito ' + conceito);