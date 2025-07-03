const notas = [];

function addNota(nota) {
  if (!notas.includes(nota)) {
    notas.push(nota);
  } else {
    return null;
  }
}

function calculaMediaDeNotas() {
  if (notas.length === 0) {
    return null;
  }
  
  let counter = notas.length - 1;
  let soma = 0;

  while (counter >= 0) {
    soma += notas[counter];
    counter--;
  }

  return soma / notas.length;
}

function removeNota(nota) {
  const index = notas.indexOf(nota);

  if (index !== -1) {
    notas.splice(index, 1);
  }
}

console.log(`A média das notas é: ${calculaMediaDeNotas()}`);
console.log("If it arrived here, the code is running");