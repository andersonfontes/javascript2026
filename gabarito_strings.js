// 1. Exibir o número de caracteres na frase
let frase = "Aprender JavaScript é divertido!";
console.log(frase.length); // 31 (contando todos os caracteres, incluindo espaços)

// 2. Exibir a string em letras maiúsculas
let texto = "JavaScript é incrível";
console.log(texto.toUpperCase()); // "JAVASCRIPT É INCRÍVEL"

// 3. Substituir "Ana" por "Maria"
let nome = "Ana Clara";
let novoNome = nome.replace("Ana Clara", "Maria Lucia");
console.log(novoNome); // "Maria Clara"

// 4. Verificar se a palavra "gosto" está presente
let frase2 = "Eu gosto de programar";
console.log(frase2.includes("gosto")); // true

// 5. Extrair os caracteres entre as posições 2 e 5
let palavra = "computador";
console.log(palavra.substring(2, 5)); // "mpu" (posição 2 a 4)

//6. Verificar se a senha tem pelo menos 8 caracteres
let senha = "JavaScript123";
if (senha.length >= 8) {
  console.log("Senha válida");
} else {
  console.log("Senha inválida");
}
// Saída: "Senha válida"

// 7. Verificar se "JavaScript" está presente na string
let texto2 = "Eu amo programar em JavaScript";
if (texto2.includes("JavaScript")) {
  console.log("Palavra encontrada");
} else {
  console.log("Palavra não encontrada");
}
// Saída: "Palavra encontrada"
