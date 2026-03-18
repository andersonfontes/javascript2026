
// Array é uma estrutura de dados que permite colocar varios dados em 
// só variael, imagine uma prateleira
// cada elemento possui uma posição, que é o seu ÍNDICE (index)

//criando um array de frutas:

let frutas = [   "uva"  , "maçã" , "pera"   ]

console.log(frutas) //imprime todo o array

console.log(frutas[0])   // imprimindo cada elemento separado
console.log(frutas[1])
console.log(frutas[2])

//substituir a fruta da prateleira 2
frutas[2] = "melancia"

console.log("\n-----\n")

console.log(frutas) //imprime todo o array

//-- MÉTODOS DE ARRAY --
//adicionar um elemento A MAIS no final do array - método .push()
frutas.push("abacaxi")
frutas.push("caqui")

console.log("\n--APÓS A REFORMA DA PRATELEIRA ---\n")
console.log(frutas)

// método pop() - retira ultimo elemento:
frutas.pop()

console.log("\n--APÓS A ENCHENTE QUE ESTRAGOU OS CAQUIS ---\n")
console.log(frutas)

//- O método `.shift()` remove o primeiro elemento do array.
frutas.shift()

console.log("\n--APÓS o buraco no teto QUE ESTRAGOU as uvas ---\n")
console.log(frutas)

//O método `.unshift()` adiciona um novo elemento no início do array.
frutas.unshift("uva")

console.log("\n--APÓS CONSERTAR A 1a.PRATELEIRA E COLOCAR AS UVAS DE VOLTA ---\n")
console.log(frutas)

// .slice() : para criar um novo array contendo parte do array orginal

let frutas_meio = frutas.slice(1,3)

console.log("---- frutas do meio:")
console.log(frutas_meio)

// remove Y elementos a partir da posição
// .splice(X,Y)
let array = ['a', 'b', 'c', 'd'];
array.splice(2,1); // Remove UM elemento no índice 2 ('c')

console.log("--EXEMPLO SPLICE ---")
console.log(array);  // Resultado: ['a', 'b', 'd']

console.log("\n--- NOVO EXEMPLO SPLICE ---")
array2 = ['a', 'b', 'c', 'd','e', 'f', 'g', 'h']

// DESAFIO-RELAMPAGO: USANDO .splice() , retire as
// letras 'f', 'g', 'h'
array2.splice(5,3)

console.log(array2)

// MÉTODO PARA DESCOBRIR O ÍNDICE DE UM ELEMENTO: .indexOf()
console.log("\n\n -- MÉTODO PARA DESCOBRIR O ÍDICE DE UM ELEMENTO: .indexOf() -- ")

console.log(frutas)
// VAMOS DESCOBRIR O INDICE DA MELANCIA

indicemelancia = frutas.indexOf('melancia')

console.log( "O indice da melancia é o: " + indicemelancia)

//desafio-relampago:
//Crie um programa usando o array de frutas, que pergunte para o usuario
// a fruta e o programa ira dizer a "prateleira" que ela está 
//se a fruta nao for encontrada, o programa deverá mostrar uma mensagem
// fruta nao encontrada
//OBS - o método .indexOf() retorna -1 se a string procurada nao for encontrada

const prompt = require('prompt-sync')()

console.log("-- bem vindo ao nosso mercadinho automatizado--")
console.log("diga o nome do produto e eu vou a informar a prateleira")

frutaescolhida = prompt("Digite a fruta desejada: ")

indice = frutas.indexOf(frutaescolhida)


if(indice == -1){
    console.log("FRUTA NÃO ENCONTRADA !!")
}
else
{
    console.log(`A fruta ${frutaescolhida} esta na prateleira ${indice} `)
}