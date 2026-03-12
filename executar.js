//npm install prompt-sync
const prompt = require('prompt-sync')()


console.log("\n**** CALCULADORA DE IMC*****\n");
console.log("**** ATENÇÃO: UTILIZE PONTO PARA SEPARAR OS DECIMAIS!!!****");

let peso  = parseFloat( prompt("Digite o seu peso: ") );
let altura = parseFloat( prompt("Digite a altura: ") );

let imc = peso / ( altura ** 2 );

let resultado
let grau //preciso definir fora do escopo, pois vou usar ela em diferentes lugares

if (imc < 18.5){
    resultado = "Abaixo do peso"
}
else if (imc < 25){
    resultado = "Peso Normal"
}
else if (imc < 30){
    resultado = "Sobrepeso"
}

else{
    resultado = "Obesidade"

    //var grau //definição com escopo global - evite
    
    //vamos agora calular o grau da obesidade

    if(imc < 35) { grau = "1" }
    else if(imc <40) { grau = "2"}
    else { grau = "3"}
}

console.log(" O seu IMC é de " + imc.toFixed(2) )

console.log("Resultado: " + resultado)

if(resultado == "Obesidade"){
    console.log("*** ATENÇÃO: Paciente com obesidade de grau: " + grau)
}

console.log("\n**** PROGRAMA FINALIZADO****\n")