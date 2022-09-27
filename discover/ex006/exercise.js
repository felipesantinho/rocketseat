/*

Desafio:

Crie um objeto que possuirá 2 propriedades, ambas do tipo array:

    * receitas: [] 
    * despesas: []
    
Agora, crie uma função que irá calcular o total de receitas e despesas e irá mostrar uma mensagem se a família está com saldo positivo ou negativo, seguido do valor do saldo.

*/

let family = {
  incomes: [1000, 400, 200, 600],
  expenses: [1800, 600, 600, 1200]
}

function sum(array){
  let total = 0

  for(let value of array){
    total += value
  }

  return total
}

function calculateBalance(){
  const calculateIncomes = sum(family.incomes)
  const calculateExpenses = sum(family.expenses)

  const total = calculateIncomes - calculateExpenses

  const itsPositive = total >= 0
  
  let balanceText = "negativo"

  if (itsPositive){
    balanceText = "positivo"
  }

  console.log(`Seu saldo é ${balanceText}: ${total.toFixed(2)} reais`)
  
}

calculateBalance()