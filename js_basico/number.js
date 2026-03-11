// outro tipo de dado é o number
// voce nao precisa definir o tipo de dado ao criar a variavel,
// pois o jvascript tem "tipagem dinâmica", ou seja,
// ele assumo o tipo de dado automaticamente ao receber um dado

let x = 8
let y = 9
let resultado = x + y  // operador de SOMA
console.log(resultado)

console.log('------------')

let a = "8"
let b = "9"
let outroResultado = a + b //operador de CONCATENAÇÃO
console.log(outroResultado)

console.log( typeof(resultado) )
console.log( typeof(outroResultado) )

console.log('------------')

// conversão de tipos
//usando parseInt para transformar uma string em numero

a = parseInt(a)
b = parseInt(b)
novoResultado = a + b
console.log(novoResultado)
console.log(  typeof(novoResultado) )

console.log('------ tipo float (tb aparece como number!)------')
f = 8.765
r = a / b

console.log(r)

console.log( typeof(f) )
console.log( typeof(r) )

console.log('---- operacoes matemáticas --------')

console.log(b + a) // soma
console.log(b - a) // subtração

console.log(b * a) // multiplicação
console.log(b / a) //divisão

console.log(b % a)  //RESTO da divisao

console.log(b ** a) //potencia (elevado a)

console.log('vamos aplicar o parseInt no resultado da divisao que veio float')
console.log( parseInt( b / a ) )

