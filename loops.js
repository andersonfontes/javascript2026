// Estruturas de controle (loops)
//Servem para executar um codigo um determinado numero de vezes
//Ou enquanto uma condição for atendida

let array = ["maçã", "banana", "laranja", "melancia"]

console.log("\n --- imprimindo manualmente cada item --- ")
console.log(array[0])
console.log(array[1])
console.log(array[2])
console.log(array[3])

console.log('--- exemplo de FOR basico ---')
//VAI IMPRIMIR OS NUMEROS DE 0 A 4

for (let i = 0; i <= 50; i++) {
    console.log(`Número: ${i}`)
}

//AGORA, VAMOS USAR O FOR PARA PERCORRER AS FRUTAS

array = ["maçã", "banana", "laranja", "melancia", "abacate" , "pera"]

console.log("\n --- imprimindo os itens usando FOR --- ")

// primeiro exemplo com "alvo" fixo p/ contador
for (let i = 0; i <= 3; i++) {
    console.log("Fruta : " + array[i])
}
console.log("\n --- imprimindo os itens usando FOR,    agora se baseando no tamanho do vetor --- ")

// segundo exemplo com "alvo" móvel p/ contador
for (let i = 0; i < array.length  ; i++) {
    console.log("Fruta : " + array[i])
}

