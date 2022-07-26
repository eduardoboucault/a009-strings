//Crie a const para a frase aqui

//* a)

const frase = `Jorge tem uma casa verde e com portão azul, com os dizeres: "BOAS VINDAS, mas não deixe o gato sair"`

console.log(`Frase do exercício: \n${frase}`)

//* b)

const fraseAtt = frase.replace('verde','rosa').replace('azul','laranja')

console.log(`Frase com replace \n${fraseAtt}`)

//* c)

console.log(`Verifique se a nova string inclui verde, e se inclui laranja: \n${fraseAtt.includes('verde'&&'laranja')}`)

//* EXTRA:

const fraseUpper = frase.replace(' mas não deixe o gato sair',' MAS NÃO DEIXE O GATO SAIR')

console.log(`Deixando o aviso final em letras maiúsculas: \n${fraseUpper}`)