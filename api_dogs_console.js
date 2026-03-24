console.log("\n-- IMAGEM ALEATORIO DE CÃES---")
console.log("Geranado enderço da imagem.....")

fetch("https://dog.ceo/api/breeds/image/random")
.then(response =>response.json())
.then(data =>console.log(data.message, "\n"))// URL da imagem
