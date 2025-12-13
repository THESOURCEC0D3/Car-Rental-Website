const menuBtn = document.getElementById("menubtn");
const mobileMenu = document.getElementById("mobileMenu");
const closeBtn = document.getElementById("closeBtn");
const overlay = document.getElementById("overlay");
const menuLinks = document.querySelectorAll(".menu-link");

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.remove("translate-x-full");
  // mobileMenu.classList.remove('hidden')
  menuBtn.classList.add("hidden");
   overlay.classList.remove("opacity-0");
   overlay.classList.add("opacity-70");
   overlay.classList.remove("pointer-events-none");
     document.body.style.overflow = "hidden";
});

closeBtn.addEventListener("click", () => {
  mobileMenu.classList.add("translate-x-full");
  //  mobileMenu.classList.add("hidden");
  menuBtn.classList.remove("hidden");
   overlay.classList.add("opacity-0");
   overlay.classList.remove("opacity-70");
   overlay.classList.add("pointer-events-none");
    document.body.style.overflow = "";
});

menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add("translate-x-full");
          // mobileMenu.classList.add("hidden");
        menuBtn.classList.remove("hidden");
        overlay.classList.add("opacity-0");
        overlay.classList.remove("opacity-70");
        overlay.classList.add("pointer-events-none");
        document.body.style.overflow = "";
    })
})

overlay.addEventListener('click', () => {
     menuBtn.classList.remove("hidden");
    mobileMenu.classList.add("translate-x-full");
      // mobileMenu.classList.add("hidden");
     overlay.classList.add("opacity-0");
     overlay.classList.remove("opacity-70");
     overlay.classList.add("pointer-events-none");
     document.body.style.overflow = "";
})
