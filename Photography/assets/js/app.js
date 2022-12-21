//! === ADD HEADER STYLES ON SCROLL ===

const headerScroll = () => {
    const headerEL = document.getElementById('header');
    this.scrollY >= 30 ? headerEL.classList.add('active') : headerEL.classList.remove('active');
}
window.addEventListener('scroll', headerScroll);

//! === OPEN AND CLOSE THE MENU ON HAMBURGER ICON CLICK ===
const menuToggle = document.querySelector('#menu-toggler');
const navbarMenu = document.querySelector('.navbar-menu');
const toggleMenu = () => {
    navbarMenu.classList.toggle('active');
}
menuToggle.addEventListener('click', toggleMenu);
window.addEventListener('mouseup', (Event) => {
    if(navbarMenu.classList.contains('active') && !menuToggle.contains(Event.target) && !navbarMenu.contains(Event.target)) {
        navbarMenu.classList.remove('active');
    }
});


// --- CLOSE MENU WHEN NAV-LINKS ARE CLICKED ---

const navLinks = document.querySelectorAll('.navbar-list-link');


navLinks.forEach(link => link.addEventListener('click', function() {
    setTimeout(function() {
        navbarMenu.classList.remove('active');
    },500)
}));

//! === SWIPER ===

const swiper = new Swiper('.my-swiper', {

    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },
    pagination: {
        el: '.swiper-pagination',
    }

});

//! === SCROLL REVEAL ===

const sr = ScrollReveal({
    distance: '50px',
    duration: 1500,
    easing: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
});

sr.reveal('.showcase-title, .showcase-image, .section-metadata, .my-swiper',
 {
    origin: 'top',
    interval: 250,
 }
);
sr.reveal('.services-image-wrapper, .about-informationm, .post--left',
 {
    origin: 'left',
 }
);
sr.reveal('.services-list, .about-images, .post--right',
 {
    origin: 'right',
 }
);
sr.reveal('.footer-container',
 {
    origin: 'top',
 }
);