let hamburgerMenu = document.querySelector('.hamburger');
let nav = document.querySelector('.small-nav');

function openMenu() {
    if (nav.style.display === "flex") {
        nav.style.display = "none";
    } else {
        nav.style.display = "flex";
    }

}

hamburgerMenu.addEventListener('click', openMenu);