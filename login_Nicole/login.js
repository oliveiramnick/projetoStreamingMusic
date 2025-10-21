let usuarios = JSON.parse(localStorage.getItem('usuarios')) || []

function logar(){
    const avisoEmail = document.getElementById('avisoEmail')
    const avisoSenha = document.getElementById('avisoSenha')
    
    const email = document.getElementById('email').value.trim()
    const senha = document.getElementById('senha').value.trim()

   
    if (email === '') {
        return avisoEmail.textContent = "Campo obrigatório"
    } 
    if (senha === '') {
        return avisoSenha.textContent = "Campo obrigatório"
    }
    
    usuarios.push({email: email, senha: senha, favoritos: []})
    nome.email = ''
    nome.senha = ''

    
    if(email =="admin" && senha =="admin"){
        alert("Logando...")
        location.href = "home.html"
    }else{
        alert("Email e senha incorretos")
    }

}
function salvar() {
    localStorage.setItem('usuarios', JSON.stringify(usuarios))
}