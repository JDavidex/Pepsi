function imgSlider(anything) {
    document.querySelector('.pepsi').src = anything;
}

function changeBgColor(color) {
    const section = document.querySelector('.section');
    section.style.background = color;
}

function menuToggle() {
    const toggleMenu = document.querySelector('.toggleMenu');
    const nav = document.querySelector('.nav');
    toggleMenu.classList.toggle('active');
    nav.classList.toggle('active');
}