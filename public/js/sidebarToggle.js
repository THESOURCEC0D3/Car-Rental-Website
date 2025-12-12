const menuBtn = document.getElementById("menubtn");
const mobileMenu = document.getElementById("mobileMenu");
const closeBtn = document.getElementById("closeBtn");
const menuLinks = document.querySelectorAll(".menu-link");

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.remove("translate-x-full");
  menuBtn.classList.add("hidden");
});

closeBtn.addEventListener("click", () => {
  mobileMenu.classList.add("translate-x-full");
  menuBtn.classList.remove("hidden");
});

menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add("translate-x-full");
        menuBtn.classList.remove("hidden");
    })
})
