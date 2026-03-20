// PERCORRENDO CADA ITEM DE UM ARRAY USANDO **FOR**

frutas = ["maçã", "banana", "laranja", "melancia"]

for (let i = 0; i < frutas.length  ; i++) {
    console.log("Fruta : " + frutas[i])
}


// USANDO **FOR EACH**
console.log("--- USANDO FOR EACH --- ")

frutas.forEach(fruta => {
    console.log("-----")
    console.log("Fruta : " + fruta)
    console.log("-----")
});
