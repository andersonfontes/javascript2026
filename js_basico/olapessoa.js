// npm install prompt-sync


const prompt = require('prompt-sync')()

const nome = prompt("Qual o seu nome? ")

//console.log(`Olá, ${nome}!`); //--usando STRING LITERALS 
console.log("Olá "   +   nome)

