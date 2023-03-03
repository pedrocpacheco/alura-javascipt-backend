// ENCAPSULAMMENTO - Como deixar atributos Privados

export default class User {
  //Devemos declarar os atributos privados antes do constructor
  #nome
  #email
  #nascimento
  #role
  #ativo
  constructor(nome, email, nascimento, role, ativo = true) {
    this.#nome = nome
    this.#email = email
    this.#nascimento = nascimento
    this.#role = role || "estudante"
    this.#ativo = ativo
  }

  // Devemos definir Getters
  // Para DAR ACESSO aos atributos PRIVADOS às HERANÇAS
  get nome() {
    return this.#nome
  }

  get email() {
    return this.#email
  }

  get nascimento() {
    return this.#nascimento
  }

  get role() {
    return this.#role
  }

  get ativo() {
    return this.#ativo
  }

  // Devemos definir Setters
  // Para as HERANÇAS conseguirem modificar os ATRIBUTOS
  set nome(novoNome) {
    this.#nome = novoNome // Assim, as Heranças conseguem mudar os seus atributos
  }

  set email(novoEmail) {
    this.#email = novoEmail
  }

  set nascimento(novoNascimento) {
    this.#nascimento = novoNascimento
  }

  set role(novoRole) {
    this.#role = novoRole
  }

  set ativo(novoAtivo) {
    this.#ativo = novoAtivo
  }

  //Também existem metodos privados
  #montaObjUser() {
    return {
      nome: this.#nome,
      email: this.#email,
      nascimento: this.#nascimento,
      role: this.#role,
      ativo: this.#ativo
    }
  }

  exibirInfos() {
    // Para passar informações de um atributo privado, precisamos declaralo em uma variavel
    // Dentro de um atributo publico, e trocar o this pelo nome da variavel.
    // exemplo de como era antes: return `${this.#nome}, ${this.#email}`
    const objUser = this.#montaObjUser()
    return `${objUser.nome}, ${objUser.email}, ${objUser.nascimento}, ${objUser.role}, ${objUser.ativo} `
  }
}

// Criando nosso novoUser
// const novoUser = new User("Pedro", "p@p.com", "2005/28/07")
// console.log(novoUser)
// console.log(novoUser.exibirInfos())
