
// alert("teste")

class ApiConnection {

    url = "http://localhost:3333/alunos"

    async  listarAlunos () {
        const response = await fetch(this.url)
    
        console.log(response)
        const alunos = await response.json()
        console.log(alunos)
        return alunos
    }
    
    // listarAlunos()
    
    async  cadastrarAluno (aluno) {
    
        const response = await fetch(this.url, {
            method: "POST",
            body: JSON.stringify(aluno),
            headers: {"Content-Type": "application/json"}
        })
    }
    
    //cadastrarAluno(aluno)
    
    async  removerAluno (id) {
        const response = await fetch(this.url + "/" + id, {
            method: "DELETE"
        })
    }
}

/*
const aluno = {
    id: 3,
    nome: "ifal",
    email: "ifal2@gmail.com"
}
*/

// removerAluno(3)

export default ApiConnection