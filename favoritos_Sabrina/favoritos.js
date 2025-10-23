// Sidebar e menu perfil
const sidebar = document.getElementById("sidebar");
const main = document.getElementById("main");
const toggleBtn = document.getElementById("toggle-sidebar");
const search = document.getElementById("search");
const profileBtn = document.getElementById("profile-btn");
const profileMenu = document.getElementById("profile-menu");

// Abre/fecha sidebar
toggleBtn.addEventListener("click", () => {
  sidebar.classList.toggle("closed");
  main.classList.toggle("expanded");
});

// Pesquisa dinâmica
search.addEventListener("input", e => {
  const value = e.target.value.toLowerCase();
  const cards = document.querySelectorAll(".playlist-card");
  cards.forEach(card => {
    const text = card.innerText.toLowerCase();
    card.style.display = text.includes(value) ? "block" : "none";
  });
});

// Menu do perfil
profileBtn.addEventListener("click", e => {
  e.stopPropagation();
  profileMenu.classList.toggle("active");
});

document.addEventListener("click", e => {
  if (!profileMenu.contains(e.target) && !profileBtn.contains(e.target)) {
    profileMenu.classList.remove("active");
  }
});

// Efeito durante pesquisa
search.addEventListener("input", e => {
  const hasText = e.target.value.trim().length > 0;
  document.body.classList.toggle("search-active", hasText);
});

