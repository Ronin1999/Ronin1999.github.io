const mobileMenu = document.querySelector('.mobile-menu'); 
const openBtn = document.querySelector('.menu-open-btn'); 
const closeBtn = document.querySelector('.menu-close-btn');


openBtn.addEventListener('click', openMenu);
closeBtn.addEventListener('click', closeMenu);

function openMenu() {
    mobileMenu.setAttribute('aria-open',"true"),
    openBtn.setAttribute('aria-expanded',"true"),
    document.body.classList.add('no-sc');
}
function closeMenu() {
    mobileMenu.setAttribute('aria-open','false'),
    openBtn.setAttribute('aria-expanded',"false"),
    document.body.classList.remove('no-sc');
}