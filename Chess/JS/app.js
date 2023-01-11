const openMenuBtn = document.querySelector('.open-menu-btn');
const closeMenuBtn = document.querySelector('.close-menu-btn');
const mobileMenu = document.querySelector('#mobile-navigation');
const headeEl = document.querySelector('#header');
const themeToggleBtn = document.querySelectorAll('.theme-toggle-btn');
const bodyEl = document.body;
const glider = document.querySelector('.glider-contain');
const navLinks = document.querySelectorAll('.mobile-navigation .nav-link');


let dataState = mobileMenu.getAttribute("data-state");
openMenuBtn.addEventListener('click',()=> {
    if(dataState === "closed") {
        mobileMenu.setAttribute("data-state","opened");
        openMenuBtn.setAttribute("aria-expanded","true");
        closeMenuBtn.setAttribute("aria-expanded","true");
    }
});

closeMenuBtn.addEventListener('click',()=> {
    mobileMenu.setAttribute("data-state","closed");
    openMenuBtn.setAttribute("aria-expanded","false");
    closeMenuBtn.setAttribute("aria-expanded","false");
});
window.addEventListener('mouseup', (event)=> {
    if(mobileMenu.hasAttribute("data-state","opened") && event.target != mobileMenu && !mobileMenu.contains(event.target)) {
        mobileMenu.setAttribute("data-state","closed");
        openMenuBtn.setAttribute("aria-expanded","false");
        closeMenuBtn.setAttribute("aria-expanded","false");
    }
})
window.addEventListener('scroll', ()=> {
    if(this.scrollY > 80) {
        headeEl.classList.add('active');
    }
    else {
        headeEl.classList.remove('active');
    }
})
// Slider

new Glider(document.querySelector('.glider'), {
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: '#dots',
    draggable: true,
    dragVelocity: 2,
    scrollLock: true,
    scrollLockDelay: 0,
});

// Theme toggle

let darkMode = localStorage.getItem('darkMode');


if (darkMode === "enabled") {
    bodyEl.setAttribute("data-theme","light");
    localStorage.setItem('darkMode','enabled');
}
themeToggleBtn.forEach(Btn => Btn.addEventListener('click', ()=> {
    var dataTheme = bodyEl.getAttribute("data-theme");
    if(dataTheme === "dark") {
        bodyEl.setAttribute("data-theme","light");
        localStorage.setItem('darkMode','enabled');
    }
    else {
        bodyEl.setAttribute("data-theme","dark");
        localStorage.setItem('darkMode','disabled');
    }
}));

// Close Navigation on link Clicks

navLinks.forEach(link => link.addEventListener('click', function() {
    setTimeout(function() {
        mobileMenu.setAttribute("data-state","closed");
        openMenuBtn.setAttribute("aria-expanded","false");
        closeMenuBtn.setAttribute("aria-expanded","false");
    },700)
}));

// Swiper JS

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1,
    spaceBetween: 20,
  
    // Navigation arrows
    navigation: {
      nextEl: '.next-btn',
      prevEl: '.prev-btn',
    },
    breakpoints: {
        750: {
            slidesPerView: 2,
        },
    },
    // And if we need scrollbar
  });