const hamburger = document.querySelector(".hamburger-menu-wrapper");
const close = document.querySelector(".hamburger-close");
const navMenu = document.querySelector(".main-nav");

hamburger.addEventListener("click", () => {
  console.log("click");
  navMenu.classList.toggle("active");
});

close.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});
// document.querySelectorAll(".main_menu nav ul li a").forEach((n) =>
//   n.addEventListener("click", () => {
//     hamburger.classList.remove("active");
//     navmenu.classList.remove("active");
//   })
// );
