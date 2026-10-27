const burger = document.querySelector(".burger");
const menu = document.querySelector(".menu-links");

burger.addEventListener("click", () => {
  const isOpen = menu.classList.toggle("is-open");
  burger.setAttribute("aria-expanded", isOpen);
});

document.querySelectorAll(".cards-section").forEach((section) => {
  const track = section.querySelector(":scope > div");
  const dots = section.querySelectorAll(".indicators span");

  const update = () => {
    const index = Math.round(track.scrollLeft / track.clientWidth);
    dots.forEach((dot, i) => dot.classList.toggle("is-active", i === index));
  };

  track.addEventListener("scroll", update, { passive: true });
  update();
});
