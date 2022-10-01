const questions = [
  "O que eu aprendi hoje?",
  "O que me deixou aborrecido? E o que eu poderia fazer para melhorar?",
  "O que me deixou feliz hoje?",
  "Quantas pessoas ajudei hoje?",
]

const ask = (index = 0) => {
  process.stdout.write("\n" + questions[index] + " -> ")
}

ask()

const answers = []

process.stdin.on("data", data => {
  answers.push(data.toString().trim())
  if(answers.length < questions.length){
    ask(answers.length)
  } else {
    process.exit()
  }
})

process.on('exit', () => {
  console.log(`
    Bacana Felipe!

    O que eu aprendi hoje foi:
    ${answers[0]}

    O que me deixou aborrecido e o que eu poderia melhorar foi:
    ${answers[1]}

    O que me deixou feliz hoje foi:
    ${answers[2]}

    Eu ajudei ${answers[3]} pessoas hoje!

    Volte amanhã para novas reflexões!!!
  `
  )
})