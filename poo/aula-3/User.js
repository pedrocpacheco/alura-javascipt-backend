//Entendendo estrutura de Classe

export default class User {
  // No constructor é onde dizemos os atributos do nosso objeto
  constructor(nome, email, nascimento, role, ativo = true) {
    this.nome = nome
    this.email = email
    this.nascimento = nascimento
    this.role = role || "estudante"
    this.aivo = ativo
  }
  // Depois os metodos
  exibirInfos() {
    return `${this.nome}, ${this.email}`
  }
}

// Criando nosso novoUser
// const novoUser = new User("Pedro", "p@p.com", "2005/28/07")
// console.log(novoUser)
// console.log(novoUser.exibirInfos())
