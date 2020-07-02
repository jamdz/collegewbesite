let hamburger = document.querySelector(".hamburger");
let sidenavmenu = document.querySelector(".side-nav-menu-list");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("open");
  sidenavmenu.classList.toggle("show");
});