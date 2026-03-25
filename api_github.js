async function buscarUsuarioGithub(user) {
try {
const response=await fetch(`https://api.github.com/users/${user}`)
const dados=await response.json()

console.log(`Nome:${dados.name}`)
console.log(`Bio:${dados.bio}`)
console.log(`Repos públicos:${dados.public_repos}`)
  }catch (erro) {
console.error("Erro:",erro)
  }
}

buscarUsuarioGithub("andersonfontes")