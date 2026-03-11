let nome = 'Anderson'
let sobrenome = 'Fontes'

//mostrar o nome e o sobrenome (CONCATENAR)

// console.log(nome + "   "   +  sobrenome)

// outra forma, usando virgula
// console.log("---------")
// console.log(nome,sobrenome)

let cpf = "98765432122"

// STRINGS CONVENCIONAIS: 
// USAM ASPAS, CONCATENAÇÃO E \n PARA QUEBRAR LINHA
let textofinal = "Nome: " + nome + "\nSobrenome: " + sobrenome + "\nCPF: "+ cpf 
console.log(textofinal)

console.log('-------------')

// TEMPLATE LITERALS: 
// USA CRASE TEXTO PRÉ-FORMATADO E "MESCLA" STRING COM VARIÁVEIS
textofinal = 
`Nome: ${nome}
Sobrenome: ${sobrenome}
CPF: ${cpf}`

console.log(textofinal)
