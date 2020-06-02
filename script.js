/*Social Media Menu*/

const socialMenuBtn = document.querySelector("#social-media-btn");
const socialMediaMenu = document.querySelector("#social-media-menu");

socialMenuBtn.addEventListener("click", () => {
    socialMediaMenu.classList.toggle("open");
});

/*Navigation Menu*/

const navPanelOpenBtn = document.querySelector("#nav-panel-open");
const navPanelCloseBtn = document.querySelector("#nav-menu-close");
const navPanel = document.querySelector("#nav-menu-panel");

navPanelOpenBtn.addEventListener("click", () => {
    navPanel.classList.toggle("visible");
});

navPanelCloseBtn.addEventListener("click", () => {
    navPanel.classList.remove("visible");
});