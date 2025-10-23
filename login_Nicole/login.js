let usuarios = JSON.parse(localStorage.getItem('usuarios')) || []
let logado = JSON.parse(localStorage.getItem('logado')) || ""

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

    let found = false;
    usuarios.forEach(item => {
        if(email == item.email && senha == item.senha){
            logado = item
            localStorage.setItem('logado', JSON.stringify(item))
            // conta()
            found = true;
            document.location="../catalogo_Rafael/home/index.html"
        }
    })

    if(found == false){
        return avisoSenha.textContent = "Email e senha incorretos"
    }

}
