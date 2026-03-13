// SOLUÇÃO NOVAUSANDO SWITCH
const prompt = require('prompt-sync')()

console.log("\n*** MENU DE OPÇÕES ***")
console.log("*** ESCOLHA A OPÇAO DESEJADA ***\n")

console.log("1 - CADASTRAR PRODUTO")
console.log("2 - ALTERAR PRODUTO")
console.log("3 - DELETAR PRODUTO")
console.log("4 - CADASTRAR CLIENTE")

let opcaousuario = prompt("Digite o numero da opcao e tecle ENTER: ")

switch (opcaousuario) {
    case '1':
        console.log("** CADASTRO DE PRODUTO **")
        produto = prompt("Produto: ")
        console.log("** CADASTRO DE PRODUTO FINALIZADO**\n")
        break

    case '2':
        console.log("** ALTERAR PRODUTO **")
        console.log("(funcionalidade ainda nao implementada")
        //aqui vai o CODIGO que cadastra produto
        console.log("** PRODUTO ALTERADO**\n")
        break

    case '3':
        console.log("** APAGAR PRODUTO **")
        console.log("(funcionalidade ainda nao implementada")
        //aqui vai o CODIGO que apaga o produto
        console.log("** PRODUTO APAGADO **\n")
        break

    case '4':
        console.log("** CADASTRO DE USUARIO **")
        usuario = prompt("Nome: ")
        idade = prompt("Idade: ")
        console.log("** CADASTRO DE USUARIO FINALIZADO**\n")
        break
}



//SOLUÇÃO ANTIGA COM IF:

// const prompt = require('prompt-sync')()

// console.log("\n*** MENU DE OPÇÕES ***")
// console.log("*** ESCOLHA A OPÇAO DESEJADA ***\n")

// console.log("1 - CADASTRAR PRODUTO")
// console.log("2 - ALTERAR PRODUTO")
// console.log("3 - DELETAR PRODUTO")
// console.log("4 - CADASTRAR CLIENTE")

// let opcaousuario = prompt("Digite o numero da opcao e tecle ENTER: ")

// if(opcaousuario == '1') {
//     console.log("** CADASTRO DE PRODUTO **")
//     produto = prompt("Produto: ")
//     console.log("** CADASTRO DE PRODUTO FINALIZADO**\n")
// }

// if(opcaousuario == '2') {
//     console.log("** ALTERAR PRODUTO **")
//     console.log("(funcionalidade ainda nao implementada")
//     //aqui vai o CODIGO que cadastra produto
//     console.log("** PRODUTO ALTERADO**\n")
// }

// if(opcaousuario == '3') {
//     console.log("** APAGAR PRODUTO **")
//     console.log("(funcionalidade ainda nao implementada")
//     //aqui vai o CODIGO que apaga o produto
//     console.log("** PRODUTO APAGADO **\n")
// }

// if(opcaousuario == '4') {
//     console.log("** CADASTRO DE USUARIO **")
//     usuario = prompt("Nome: ")
//     idade = prompt("Idade: ")
//     console.log("** CADASTRO DE USUARIO FINALIZADO**\n")
// }


