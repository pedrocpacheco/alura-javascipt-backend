// Entendendo herença

//Importando o Objeto User
import User from "./User.js"

//A class admin se extende de User
class Admin extends User {
  //Criando Atributos
  constructor(nome, email, nascimento, role = "admin", ativo = true) {
    //role e ativo são iguais
    super(nome, email, nascimento, role, ativo) // trazendo as propriedades
  }

  //Criando metodos
  // Para criar metodos não precisa escrever Function, e sim só o nome do metodo direto
  criarCurso(nomeDoCurso, vagas) {
    return `Curso de ${nomeDoCurso} criado com ${vagas} vagas`
  }
}

const novoAdmin = new Admin("Daniel", "d@d.com", "2005/13/04")
console.log(novoAdmin)
console.log(novoAdmin.exibirInfos()) //Executando metodo herdada do User
console.log(novoAdmin.criarCurso("POO", 1)) //Executando metodo exclusivo do Admin
