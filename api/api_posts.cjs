//import * as funcoes from './biblioteca_funcoes_api.js'
const prompt = require("prompt-sync")()

// CRIAÇÃO DAS FUNÇÕES
function mostrarMenu() {
    console.log(`MENU DE OPÇÕES:
    1 - LISTAR TODOS OS POSTS
    2 - LISTAR POSTS DE UM USUARIO ESPECIFICO   `)
}

function listarTodosPosts() {
    console.log("\n ---- TODOS OS POSTS ----")

    fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => response.json())
        
        .then(posts => console.log(posts))
}

function listarPostsPorUsuario() {
    console.log("\n ---- POSTAGENS DO USUARIO ----")
    console.log("\n Digite o ID do usuario (1 a 10) para ver seus posts")

    let idusuario = prompt("ID do usuario: ")

    fetch("https://jsonplaceholder.typicode.com/posts?userId=" + idusuario)
        .then(response => response.json())
        .then(posts => console.log(posts))

}

//INICIO DO PROGRAMA PRINCIPAL

console.log("-- PROGRAMA DE LISTAR POSTS --")

mostrarMenu() //CHAMADA DE FUNÇÃO - ESTOU USANDO A FUNÇÃO
let escolha = prompt("Digite a opcao desejada: ")

if (escolha == "1") {
    listarTodosPosts()
}
else {
    listarPostsPorUsuario()
}