//npm install prompt-sync
const prompt = require('prompt-sync')()

// Situação 1: Verificar se um número é positivo, negativo ou zero
// Problema: Dado um número, verifique se ele é positivo, negativo ou zero e exiba uma mensagem apropriada.

let numero = -3;

if (numero > 0) {
  console.log("O número é positivo.");
} else if (numero < 0) {
  console.log("O número é negativo.");
} else {
  console.log("O número é zero.");
}


// Situação 2: Avaliar idade para ingresso em uma competição esportiva
// Problema: Em uma competição esportiva, pessoas com menos de 18 anos 
// não podem participar. Verifique se uma pessoa pode ou não se inscrever 
// com base na sua idade.

idade = prompt('Digite a idade do atleta: ');

if (idade >= 18) {
  console.log("Você pode participar da competição.");
} else {
  console.log("Você não pode participar da competição.");
}


// Situação 3: Calcular o valor final de uma compra com desconto
// Problema: Se uma compra for acima de R$100, aplique um desconto de 10%. Caso contrário, não aplique desconto.

let valorCompra = 120;
let valorFinal;

if (valorCompra > 100) {
  valorFinal = valorCompra * 0.9;
  console.log(`Você recebeu um desconto. O valor final é R$${valorFinal}.`);
} else {
  console.log(`O valor da compra é R$${valorCompra}.`);
}


// Situação 4: Verificar a categoria de um estudante com base na nota
// Problema: Dada a nota de um estudante, exiba se ele está "Aprovado", em "Recuperação" ou "Reprovado". Notas maiores ou iguais a 70 indicam aprovação, entre 50 e 69 indicam recuperação, e abaixo de 50 indicam reprovação.

let nota = 65;

if (nota >= 70) {
  console.log("Aprovado");
} else if (nota >= 50 && nota < 70) {
  console.log("Recuperação");
} else {
  console.log("Reprovado");
}

// Situação 5: Calculadora de IMC com classificação
// Problema: Desenvolva um programa que calcule o Índice de Massa Corporal (IMC) de uma pessoa com base no seu peso e altura. Além disso, o programa deve classificar o IMC em uma das seguintes categorias:

// Abaixo do peso: IMC menor que 18,5
// Peso normal: IMC entre 18,5 e 24,9
// Sobrepeso: IMC entre 25 e 29,9
// Obesidade: IMC igual ou maior que 30
// Desafio extra: Se a pessoa estiver com obesidade, exiba uma mensagem adicional indicando se ela está no grau 1, 2 ou 3 de obesidade:

// Obesidade Grau 1: IMC entre 30 e 34,9
// Obesidade Grau 2: IMC entre 35 e 39,9
// Obesidade Grau 3: IMC igual ou maior que 40

console.log("\n**** CALCULADORA DE IMC*****\n");
console.log("ATENÇÃO: UTILIZE PONTO PARA SEPARAR OS DECIMAIS!!!");

let peso  = parseFloat( prompt("Digite o seu peso") );
let altura = parseFloat( prompt("Digite a altura") );

let imc = peso / ( altura ** 2 );

let resultado

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
}

console.log(" O seu IMC é de " + imc )

console.log("Resultado: " + resultado)







// Situação 6: Simulação de aprovação de empréstimo com múltiplos critérios
// Problema: Um banco deseja aprovar ou rejeitar empréstimos com base nos seguintes critérios:

// O cliente deve ter mais de 18 anos.
// A renda mensal deve ser maior que R$2.000.
// O cliente não pode ter nome sujo (ou seja, não pode estar na lista de inadimplentes). Se todas as condições forem atendidas, o empréstimo é aprovado. Caso contrário, informe ao cliente o motivo pelo qual o empréstimo foi negado.

let idade2 = 25; //INT
let rendaMensal = 3000; //INT
let nomeSujo = false; //BOOLEAN

if (idade2 > 18) {
  if (rendaMensal > 2000) {
    if (!nomeSujo) {
      console.log("Empréstimo aprovado.");
    } else {
      console.log("Empréstimo negado: Nome sujo.");
    }
  } else {
    console.log("Empréstimo negado: Renda insuficiente.");
  }
} else {
  console.log("Empréstimo negado: Idade insuficiente.");
}


// Situação 7: Calculadora de salário com imposto de renda progressivo
// Problema: Crie um programa que calcule o salário líquido de um funcionário após aplicar o imposto de renda baseado nas seguintes faixas:

// Salário até R$2.000: isento de imposto
// Salário entre R$2.001 e R$3.500: 10% de imposto
// Salário entre R$3.501 e R$5.000: 15% de imposto
// Salário acima de R$5.000: 20% de imposto
// Desafio extra: Exiba a quantia exata que foi descontada em impostos e o salário líquido final.

let salarioBruto = 4500;
let imposto;
let salarioLiquido;

if (salarioBruto <= 2000) {
  imposto = 0;
} else if (salarioBruto <= 3500) {
  imposto = salarioBruto * 0.10;
} else if (salarioBruto <= 5000) {
  imposto = salarioBruto * 0.15;
} else {
  imposto = salarioBruto * 0.20;
}

salarioLiquido = salarioBruto - imposto;
console.log(`Imposto descontado: R$${imposto}`);
console.log(`Salário líquido: R$${salarioLiquido}`);

