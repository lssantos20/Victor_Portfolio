// Script básico para adicionar o comportamento de clique
const menuIcon = document.querySelector(".menu-icon");
const menu = document.querySelector(".menu");

menuIcon.addEventListener("click", () => {
  menu.classList.toggle("active");
  menuIcon.classList.toggle("open");
});
