// faz todos os botoes funcionarem
const sidebar = document.getElementById("sidebar");
const main = document.getElementById("main");
const toggleBtn = document.getElementById("toggle-sidebar");
const search = document.getElementById("search");
const profileBtn = document.getElementById("profile-btn");
const profileMenu = document.getElementById("profile-menu");

// 
toggleBtn.addEventListener("click", () => {
  sidebar.classList.toggle("closed");
  main.classList.toggle("expanded");
});

// pesquisa
search.addEventListener("input", e => {
  const value = e.target.value.toLowerCase();
  const cards = document.querySelectorAll(".playlist-card");
  cards.forEach(card => {
    const text = card.innerText.toLowerCase();
    card.style.display = text.includes(value) ? "block" : "none";
  });
});

// menu do perfil
profileBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  profileMenu.classList.toggle("active");
});

// fecha o menu se clicar fora
document.addEventListener("click", (e) => {
  if (!profileMenu.contains(e.target) && !profileBtn.contains(e.target)) {
    profileMenu.classList.remove("active");
  }
});

// diminui o card quando pesquisado
search.addEventListener("input", e => {
  const value = e.target.value.toLowerCase();
  const hasText = value.trim().length > 0;
  let visibleCount = 0;

  document.body.classList.toggle("search-active", hasText);

  if (hasText && visibleCount === 1) {
    playlistGrid.classList.add("searching-single");
  } else {
    playlistGrid.classList.remove("searching-single");
  }
});

// conta
let usuarios = JSON.parse(localStorage.getItem('usuarios')) || []
let logado = JSON.parse(localStorage.getItem('logado')) || ""
let musica = localStorage.getItem('musica') || "";
const popupConta = document.querySelector('.popup-conta')
const popupConfiguracao = document.querySelector('.popup-configuracao')

function conta(){
    const nome = document.getElementById('nome')
    const email = document.getElementById('email')
    
    nome.textContent = logado.nome
    email.textContent = logado.email
}

function atualizarUsuario(){
    const novoNome = document.getElementById('novoNome').value.trim()
    const novoEmail = document.getElementById('novoEmail').value.trim()
    
    const index = usuarios.findIndex(item => item.email === logado.email)
    usuarios[index].nome = novoNome
    usuarios[index].email = novoEmail

    localStorage.setItem('usuarios', JSON.stringify(usuarios));
    logado = usuarios[index];
    localStorage.setItem('logado', JSON.stringify(logado));
    conta()
    popupConfiguracao.style.display = 'none'
}

function popupAbrirConta(){
    popupConta.style.display = 'block'
    conta()
}

function popupAbrirConfiguracao(){
    popupConfiguracao.style.display = 'block' 
}

function popupFecharConta(){
    popupConta.style.display = 'none'
}

function popupFecharConfiguracao(){
    popupConfiguracao.style.display = 'none'
}

function sair(){
    localStorage.removeItem('logado');
    document.location="../login_Nicole/login.html"
}

function irMusica(texto){
  localStorage.setItem('musica', texto);
  document.location="../conteudo_Therciane/reproducao.html"
}