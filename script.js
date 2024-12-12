alert("teste")

async function listarAlunos () {
    const response = await fetch("http://localhost:3333/alunos")

    console.log(response)
    const alunos = await response.json()
    console.log(alunos)
    return alunos
}

// listarAlunos()

async function cadastrarAluno (aluno) {

    const response = await fetch("http://localhost:3333/alunos", {
        method: "POST",
        body: JSON.stringify(aluno),
        headers: {"Content-Type": "application/json"}
    })
}

const aluno = {
    id: 3,
    nome: "ifal",
    email: "ifal2@gmail.com"
}

//cadastrarAluno(aluno)

async function removerAluno (id) {
    const response = await fetch("http://localhost:3333/alunos/" + id , {
        method: "DELETE"
    })
}

removerAluno(3)