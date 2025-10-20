let usuarios = JSON.parse(localStorage.getItem('usuarios')) || []

function cadastrar(){
    const avisoNome = document.getElementById('avisoNome')
    const avisoEmail = document.getElementById('avisoEmail')
    const avisoSenha = document.getElementById('avisoSenha')
    const avisoConfirmarSenha = document.getElementById('avisoConfirmarSenha')
    
    const nome = document.getElementById('nome').value.trim()
    const email = document.getElementById('email').value.trim()
    const senha = document.getElementById('senha').value.trim()
    const confirmarSenha = document.getElementById('confirmarSenha').value.trim()

    if (nome === '') {
        return avisoNome.textContent = "Campo obrigatório"
    }
    if (email === '') {
        return avisoEmail.textContent = "Campo obrigatório"
    } 
    if (senha === '') {
        return avisoSenha.textContent = "Campo obrigatório"
    } 
    if (confirmarSenha === '') {
        return avisoConfirmarSenha.textContent = "Campo obrigatório"
    }
    if (senha != confirmarSenha) {
        return avisoConfirmarSenha.textContent = "Senhas diferentes"
    } 
    
    usuarios.push({nome: nome, email: email, senha: senha, favoritos: []})
    nome.value = ''
    nome.email = ''
    nome.senha = ''
    nome.confirmarSenha = ''
    salvar()
    document.location="../login_Nicole/login.html"
}

function salvar() {
    localStorage.setItem('usuarios', JSON.stringify(usuarios))
}