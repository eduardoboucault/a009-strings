//* Exercício 2

const minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      "

//* a)

const minhaStringAtt = minhaString.trim()

//* b)

console.log(`O número de caracteres na string com espaço é de ${minhaString.length} letras.\nO número de caracteres na string sem espaço é de ${minhaString.trim().length} letras.`)


//* c)

console.log(minhaString.replaceAll('________','sticioso'))