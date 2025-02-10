import ApiConnection from "./api.js"

const api = new ApiConnection()

const btn = document.querySelector("#btn--cadastrar")

btn.addEventListener('click', async () => {

    const inputNome = document.querySelector("#input--nome")
    const inputEmail = document.querySelector("#input--email")

    // console.log(inputNome.value)
    // console.log(inputEmail.value)

    if (inputNome.value != "" && inputEmail.value != "") {

        const aluno = {
            nome: inputNome.value,
            email: inputEmail.value
        }

        await api.cadastrarAluno(aluno)

        inputNome.value = ""
        inputEmail.value = ""

        carregarPagina()
    } else {
        alert("Digite os valores de nome e email!")
    }
})

function limparTabela() {

    const tbody = document.querySelector("tbody")
    // console.log(tbody)

    const linhas = tbody.querySelectorAll("tr")
    linhas.forEach(linha => linha.remove())
}

async function carregarPagina() {

    limparTabela()

    const alunos = await api.listarAlunos()
    // console.log(alunos)

    /*
    alunos.forEach(aluno => {
        console.log(aluno.nome)
        console.log(aluno.email)
    })
    */

    alunos.forEach(aluno => {
        const tbody = document.querySelector("tbody")

        const linha = document.createElement("tr")
        const nome = document.createElement("td")
        nome.innerText = aluno.nome

        const email = document.createElement("td")
        email.innerText = aluno.email

        const btn = document.createElement("td")
        btn.appendChild(criarButton(aluno.id))

        linha.appendChild(nome)
        linha.appendChild(email)
        linha.appendChild(btn)

        tbody.appendChild(linha)
    })
}

function criarButton(id) {
    const btn = document.createElement("button")
    btn.innerText = "Remover"

    btn.addEventListener('click', async ()=> {

        await api.removerAluno(id)

        carregarPagina()

    })

    return btn
}

carregarPagina()

