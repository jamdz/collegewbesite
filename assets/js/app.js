let hamburger = document.querySelector(".hamburger");
let mobileMenu = document.querySelector(".mobile-menu-list");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("open");
  mobileMenu.classList.toggle("show");
});