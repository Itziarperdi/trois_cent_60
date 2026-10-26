const burger = document.querySelector(".burger");
const menu = document.querySelector(".menu-links");

burger.addEventListener("click", () => {
  const isOpen = menu.classList.toggle("is-open");
  burger.setAttribute("aria-expanded", isOpen);
});
