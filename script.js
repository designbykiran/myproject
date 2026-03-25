const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('show'); 
    menuToggle.classList.toggle('open');
 menuToggle.style.display ="none";
});


const closeMenu = document.getElementById('close-menu');
if (closeMenu) {
    closeMenu.addEventListener('click', () => {
        navLinks.classList.remove('show'); 
        menuToggle.classList.remove('open'); 
        menuToggle.style.display ="block";
    });
}

const container = document.getElementById("card-containers");
const leftBtn = document.getElementById("left-arrow");
const rightBtn = document.getElementById("right-arrow");

rightBtn.addEventListener("click", () => {
container.scrollBy({
left: -400,
behavior: "smooth"
});
});

leftBtn.addEventListener("click", () => {
container.scrollBy({
left: 400,
behavior: "smooth"
});
});