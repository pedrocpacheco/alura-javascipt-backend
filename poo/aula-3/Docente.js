// Mesmo processo do Admin

import User from "./User.js"

class Docente extends User {
  constructor(nome, email, nascimento, role = "docente", ativo = true) {
    super(nome, email, nascimento, role, ativo)
  }

  aprovaEstudante(idEstudante, idCurso) {
    return `estudante ${idEstudante} aprovado no curso ${idCurso}`
  }
}

const novoDocente = new Docente("João", "j@j.com", "2004/30/01")
console.log(novoDocente.exibirInfos())
console.log(novoDocente.aprovaEstudante("Caio", "TI"))
