const navToggle = document.querySelector(".nav-toggle");
const nav = document.querySelector("header nav");

navToggle.addEventListener("click", function() {
    nav.classList.toggle("show");
})
