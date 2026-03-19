
// 1- Você está responsável por atualizar um catálogo de tintas. O array cores armazena as cores disponíveis: "Vermelho", "Verde", "Azul". Recentemente, foi decidido que a cor verde será substituída por amarelo. Sua tarefa é modificar o array para refletir essa mudança e exibir a terceira cor disponível no catálogo.

//O QUE ELE QUER: TROCAR O VERDE POR AMARELO

array_cores = [ 'vermelho' , 'verde' , 'azul']
console.log ('CATALOGO ORIGINAL: ' + array_cores)

//VAMOS TROCAR O ELEMENTO
array_cores[1] = 'amarelo'

console.log ('\nCATALOGO MODIFICADO: ' + array_cores)

// 2- Um zoológico precisa organizar a lista de seus animais. Atualmente, a lista animais contém: "Gato", "Cachorro", "Pássaro". O zoológico adquiriu um novo animal, um elefante, e ele deve ser adicionado ao final da lista. Além disso, o zoológico decidiu transferir o gato para outro local, então ele deve ser removido da lista. Exiba a lista atualizada.

//o que eu tenho que fazer?
// adicionar elefonate no final .push()
// retirar o gato do inicio .shift()

array_animais = [ 'gato' , 'cachorro' , 'passaro']
console.log ('\nZOOLOGICO ORIGINAL: ' + array_animais)

//adicionar elefante
array_animais.push('elefante')

//tirar gato
array_animais.shift()

console.log ('\nZOOLOGICO MODIFICADO: ' + array_animais)


// 3- Durante um levantamento internacional, foi criada uma lista de países chamada paises, que contém: "Brasil", "Argentina", "Chile", "Uruguai". Sua tarefa é contar quantos países estão listados e exibir essa informação.

// o que eu tenho que fazer??? contar elementos .length
array_paises = [ "Brasil", "Argentina", "Chile", "Uruguai" ]

console.log(array_paises)
console.log("o numero de paises é: " + array_paises.length)


// 4- Em uma pesquisa, você tem um array de números chamado numeros: [10, 20, 30, 40, 50]. Você precisa localizar o índice do número 30 dentro do array para usar essa informação em um relatório para encontrar o índice e exibi-lo.

array_numeros = [10, 20, 30, 40, 50]
 // O QUE EU TENHO QUE FAZER? ENCONTRAR INDICE DE UM ELEMENTO .indexOf()

 console.log(array_numeros)
 console.log("O indice do numero 30 é :  " + array_numeros.indexOf(30))


// 5- Uma lista de alimentos contém: "Arroz", "Feijão", "Batata", "Macarrão", "Carne". Para uma receita específica, você só precisa dos ingredientes 1. Crie uma nova lista que contenha apenas esses dois ingredientes e exiba o resultado.

array_alimentos = [ "Arroz", "Feijão", "Batata", "Macarrão", "Carne" ]

// o que eu tenho que fazer?
// criar novo array somente com 2 itens

novo_array = array_alimentos.splice(1,2)
console.log("\nA nova lista contem apenas: " + novo_array)

console.log("array original: " + array_alimentos)