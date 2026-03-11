//introdução a else if
// else if é o equivalente a else { if mas
// sem "andar" o codigo pra frente (codigo hadouken) 

const prompt = require('prompt-sync')()

numero = prompt('Digite um numero')


if(numero > 0) { 
    console.log(`O numero ${numero} é positivo`); //template literal
}

else if(numero < 0) {
        console.log(`O numero ${numero} é negativo`);    
}
else{
console.log(`O numero ${numero} é ZERO`);}


