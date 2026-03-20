// WHILE IRA RODAR AQUELE CODIGO **ENQUANTO** A CONDIÇÃO FOR VERDADEIRA
const prompt = require("prompt-sync")()

let numerosecreto = "8"

let palpite = prompt("__Adivinhe o numero secreto: ")
if (palpite == numerosecreto) {
    console.log("__ACERTOU !!! PARABENS")
}

while (palpite != numerosecreto) {
    console.log("\n VOCE ERROU")

    console.log("*** NOVA TENTATIVA ***")
    palpite = prompt("\nAdivinhe o numero secreto: ")
    
    if (palpite == numerosecreto) {
        console.log("ACERTOU !!! PARABENS")   
        break
    }
}
