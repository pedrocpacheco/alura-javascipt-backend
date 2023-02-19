const user = {
  nome: "Pedro",
  email: "p@p.com",
  nascimento: "2005/28/07",
  role: "estagiario",
  ativo: true,
  exibirInfos: function () {
    console.log(this.nome, this.email, this.nascimento) //This quer dizer que você se refere ao X do proprio objeto
  }
}
user.exibirInfos()
// Isso não funciona, pq o this da função exibirInfos perde o sentido
// const exibir = user.exibirInfos
// exibir()
const exibir = function () {
  console.log(this.nome) //inicialmente isso não funcionaria, como foi dito anteriomente
}
// Para fazer essa função funcionar, podemos usar o bind, para prender aquilo ao objeto que queremos.
const exeibirNome = exibir.bind(user) // Agora, o this da função exibir fará sentido
exibir()

const admin = {
  nome: "Daniel",
  email: "d@d.com",
  nascimento: "2005/14/04",
  role: "admin",
  criarCurso() {
    console.log("curso criado")
  }
}

// Para não ter que escrever as mesmas coisas de novo em outro objeto usamos o setPrototype of
Object.setPrototypeOf(admin, user) // Assim, o admin terá o exibirInfos mesmo sem ter sido declarado dentro dele
admin.criarCurso()
admin.exibirInfos()
