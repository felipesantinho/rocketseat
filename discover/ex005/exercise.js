/*

Desafio:

Crie um algoritmo que transforme as notas do sistema numérico para sistema de notas em caracteres tipo A B C

* de 90 para cima -   A
* entre 80 - 89   -   B
* entre 70 - 79   -   C
* entre 60 - 69   -   D
* menor que 60    -   E

*/

function getValue(value){
  let valueA = value >= 90 && value <= 100
  let valueB = value >= 80 && value <= 89
  let valueC = value >= 70 && value <= 79
  let valueD = value >= 60 && value <= 69
  let valueE = value >= 0 && value < 60 

  if (valueA){
    valueFinal = 'A'
  } else if (valueB){
    valueFinal = 'B'
  } else if (valueC){
    valueFinal = 'C'
  } else if (valueD){
    valueFinal = 'D'
  } else if (valueE){
    valueFinal = 'E'
  } else {
    valueFinal = 'Nota Inválida'
  }

  return valueFinal
}

console.log (getValue(110))
console.log (getValue(100))
console.log (getValue(89))
console.log (getValue(79))
console.log (getValue(69))
console.log (getValue(59))
console.log (getValue(0))
console.log (getValue(-10))