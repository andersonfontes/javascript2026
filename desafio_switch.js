//DESAFIO: 
// faça um programa usando switch para registrar o voto
// se o usuario digitar 22 registre o voto para bolsonaro
// se o usuario digitar 13 resgitre o voto para lula
// se o usuario digitar 20 registra voto para amoedo
// se o usario digitar outro numero qualquer regitrar voto nulo


const prompt = require('prompt-sync')()

console.log('** VOTAÇÃO 2026**')
console.log('Digite 13 pra votar no Lula')
console.log('Digite 22 pra votar no Bolsonaro')
console.log('Digite 20 pra votar no Amoedo')
console.log('Digite outro para anular')

voto = prompt("Digite o numero: ")

switch (voto) {
    case '22':
        console.log('Voto registrado em BOLSONARO')

    case '13':
        console.log('Voto registrado em LULA')

    case '20':
        console.log('Voto registrado em AMOEDO')

    default:
        console.log('Numero invalido - voto anulado')





}