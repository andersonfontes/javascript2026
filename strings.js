let nome = 'Anderson Delgado Fontes'

console.log ( "Imprimindo o tamanho de uma string: " )
console.log ( nome.length ) //retorna o tamanho da string

console.log ( `O nome ${nome} possui ${nome.length} caracteres`)

console.log ( "------------------")
console.log ( "posição (índice) de caracteres em uma string:" )
console.log(nome) //string inteira
console.log(nome[0])
console.log(nome[1])
console.log(nome[2])
console.log(nome[3])
console.log(nome[4])
console.log(nome[5])
console.log(nome[6])
console.log(nome[7])

let saudacao = "Olá, Mundo!";

console.log(saudacao.toUpperCase()); // "OLÁ, MUNDO!"
console.log(saudacao.toLowerCase()); // "olá, mundo!"

console.log(saudacao)

saudacao = saudacao.toUpperCase()

console.log(saudacao)

console.log('--------')

let frase = "Aprender JavaScript é divertido!";

console.log("O primeiro n minusculo aparece no índice" + frase.indexOf('n'))

console.log("O é aparece no índice: " + frase.indexOf('é'))

console.log("O Javascript se inicia no índice: " + frase.indexOf("JavaScript"))

console.log('-----')

let nome2 = "Desenvolvedor Web";
let parte = nome2.slice(0, 12); // "Desenvolvedo"
console.log(parte);





