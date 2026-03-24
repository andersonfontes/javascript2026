async function buscarCep(cep) {
try {
const response= await fetch(`https://viacep.com.br/ws/${cep}/json/`)
const dados= await response.json()

if (dados.erro) {
console.log("CEP não encontrado.")
return
    }

console.log(`Rua:${dados.logradouro}`)
console.log(`Bairro:${dados.bairro}`)
console.log(`Cidade/UF:${dados.localidade} -${dados.uf}`)
  }catch (erro) {
console.error("Erro na requisição:",erro)
  }
}

buscarCep("01001a00")