// WHILE IRA RODAR AQUELE CODIGO **ENQUANTO** A CONDIÇÃO FOR VERDADEIRA
const prompt = require("prompt-sync")()

let numerosecreto = 8
let tentativas = 1 //CONTADOR DE TENTATIVAS

console.log("TENTATIVA: " + tentativas)

let palpite = Number(prompt("__Adivinhe o numero secreto: "))
if (palpite == numerosecreto) {
    console.log("__ACERTOU !!! PARABENS")
}

while (palpite != numerosecreto) {
    console.log("\n VOCE ERROU!! ")

    if(palpite < numerosecreto){  
        console.log("tente mais alto")      
    }
    else{
        console.log("tente mais baixo")
    }

    tentativas++
    if (tentativas == 5) {
        console.log("ACABARAM AS TENTATIVAS !!")
        break
    }

    console.log("*** NOVA TENTATIVA ***")
    console.log("TENTATIVA: " + tentativas)
    palpite = prompt("\nAdivinhe o numero secreto: ")
    
    if (palpite == numerosecreto) {
        console.log("ACERTOU !!! PARABENS")   
        break
    }
}
