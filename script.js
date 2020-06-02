const socialMenuBtn = document.querySelector("#social-media-btn");
const socialMediaMenu = document.querySelector("#social-media-menu");

socialMenuBtn.addEventListener("click", () => {
    socialMediaMenu.classList.toggle("open");
});