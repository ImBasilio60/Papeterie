const btn = document.querySelector(".burger-toggle");
const icon = btn.firstElementChild;
btn.addEventListener("click", () => {
  if (icon.classList.contains("fa-bars")) {
    icon.classList.remove("fa-bars");
    icon.classList.add("fa-times");
  } else {
    icon.classList.add("fa-bars");
    icon.classList.remove("fa-times");
  }
  document.querySelector("nav.navigation").classList.toggle("active");
  document.querySelector(".header").classList.toggle("active");
});

window.addEventListener("resize", (e) => {
  icon.classList.add("fa-bars");
  icon.classList.remove("fa-times");
  document.querySelector("nav.navigation").classList.remove("active");
  document.querySelector(".header").classList.remove("active");
});
