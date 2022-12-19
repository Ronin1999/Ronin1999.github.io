const mobileMenu = document.querySelector('.mobile-menu');
const openBtn = document.querySelector('.open-menu-btn');
const closeBtn = document.querySelector('.close-menu-btn');
const overlay = document.querySelector('.overlay');


openBtn.addEventListener('click', () => {
    mobileMenu.setAttribute('aria-expanded',true),
    overlay.classList.add('active'),
    body.classList.add('.no-sc'); 
});

closeBtn.addEventListener('click', () => {
    mobileMenu.setAttribute('aria-expanded',false),
    overlay.classList.remove('active'),
    body.classList.remove('.no-sc'); 
});
overlay.addEventListener('click', () => {
    mobileMenu.setAttribute('aria-expanded',false),
    overlay.classList.remove('active'), 
    body.classList.remove('.no-sc'); 
});