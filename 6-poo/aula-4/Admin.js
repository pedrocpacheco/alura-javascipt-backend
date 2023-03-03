// COMO O ENCAPSULAMENTO AFETA AS HERANÇAS:
import User from "./User.js"

export default class Admin extends User {
  constructor(nome, email, nascimento, role = "admin", ativo = true) {
    super(nome, email, nascimento, role, ativo)
  }

  // GET =================================================================================================================
  //Vamos supor que eu vá querer criar um metodo que mostra o nome do admin
  printarNomeAdminPrivado() {
    //return `${this.#nome}` | Da erro, pois a herança não tem acesso ao campo privado #nome do User
  }

  //Para fazer funcionar, devemos usar o getter que foi definido no User
  printarNomeAdminUsandoGet() {
    return `${novoAdmin.nome}` //Mesmo que o nome seja uma função Getter, nos não usamos () quando chamamos
  }

  criarCurso(nomeDoCurso, vagas) {
    return `Curso de ${nomeDoCurso} criado com ${vagas} vagas`
  }
}

const novoAdmin = new Admin("Thay", "t@t.com", "2005/18/06")
console.log(novoAdmin.printarNomeAdminUsandoGet())

// SET =================================================================================================================
//Vamos supor que você deseja mudar o nome do seu novoAdmin
//novoAdmin.#nome = "Mafe" // Isso não funciona, pq você não consegue mudar algo privado.

// Então, devemos usar o setter para alterar a classe que ja ta instanciada
novoAdmin.nome = "Mafe" // mesmo no nome set seja uma função, nos não devemos usar ()
