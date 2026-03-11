// DESAFIO: FAÇA UM PROGRAMA QUE PEÇA PARA O PROFESSOR DIGITAR 3 NOTAS
// EM SEQUENCIA , E EM SEGUIDA O PROGRAMA IRÁ CALCULAR A MEDIA DO ALUNO

//SE A NOTA FOR MAIOR OU IGUAL A 7, O PROGRAMA DEVERA MOSTRAR A MESNAGEM:
//ALUNO APROVADO
//SE A NOTA FOR MENOR QUE 5, O PROGRAMA DEVERA MOSTRAR ALUNO REPROVADO
//SE ESTIVER ENTRE 5 E 7, ALUNO DE RECUPERAÇÃO

const prompt = require('prompt-sync')()

let n1
let n2
let n3

console.log ('\n******* CÁLCULO DE MÉDIA ********\n')

n1=parseFloat( prompt('Digite a nota 1: ') ) 
n2=parseFloat( prompt('Digite a nota 2: ') )
n3=parseFloat( prompt('Digite a nota 3: ') )

let media = (n1+n2+n3) /3

console.log(`\nA média do aluno foi: ${media}`)

if (media >=7){
    console.log('Aluno Aprovado')
}
else if (media >=5){
    console.log('Aluno de Recuperação')
}
else{
    console.log('Aluno Reprovado')
}

console.log('\n***** PROGRAMA FINALIZADO ****** \n')