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
