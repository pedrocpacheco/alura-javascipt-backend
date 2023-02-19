import User from "./User.js"
import Docente from "./Docente.js"
import Admin from "./Admin.js"

const novoUser = new User("Luane", "l@l.com", "2004/13/04")
console.log(novoUser.exibirInfos())

//Aqui estamos tentando modificar o nome de novoUser
// novoUser.#nome = "Mafe" //Mas como o nome esta definido como privado, dara erro

//Mostrando que não é possivel usar um metodo privado fora da classe
// console.log(novoUser.#montaObjUser())

//Mas podemos passar as infos de um metodo privado a partir de um metodo publico (olhe o User)
console.log(novoUser.exibirInfos())

const novoAdmin = new Admin("Thay", "t@t.com", "2005/18/06")
