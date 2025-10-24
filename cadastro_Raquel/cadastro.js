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

    let emailDuplicado = false
    usuarios.forEach(item => {
        if(item.email == email){
            emailDuplicado = true
        }
    })
    if(emailDuplicado == true){
        return avisoEmail.textContent = "Já possui conta"
    }

    if (nome === '') {
        return avisoNome.textContent = "Campo obrigatório"
    }
    if (email === '' || !email.includes("@")) {
        return avisoEmail.textContent = "Email inválido"
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