// Variables
const menuToggleBtn = document.querySelector('.menu-toggle-btn');
const mobileMenu = document.querySelector('.mobile-menu');
const overlay = document.querySelector('.overlay');
const bodyEl = document.body;
const header = document.querySelector('#header');
const counters = document.querySelectorAll('.counter');

// Toggle MobileMenu
menuToggleBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
    mobileMenu.classList.toggle('active');
    menuToggleBtn.classList.toggle('active');
    overlay.classList.toggle('active');
    bodyEl.classList.toggle('no-sc');
}

overlay.addEventListener('click', ()=> {
    if(mobileMenu.classList.contains('active')){
        closeMenu();
    }
});

function closeMenu() {
    mobileMenu.classList.remove('active');
    menuToggleBtn.classList.remove('active');
    overlay.classList.remove('active');
    bodyEl.classList.remove('no-sc');
}


// Toggle Header Class on Scroll
window.addEventListener('scroll', ()=> {
    if(this.scrollY >= 30) {
        header.classList.add('active');
    }
    else {
        header.classList.remove('active');
    }
})



// CountUp
function countUp() {
    counters.forEach(counter => {
    counter.innerText = '00';

    const updateCounter = () => {
        const target = +counter.getAttribute('data-target');   
        const c = +counter.innerText;
        const increment = target / 100;
        
        if(c < target) {
            counter.innerText = `${Math.ceil(c + increment)}`;
            setTimeout(updateCounter, 75);
        }
        else {
            counter.innerText = target;
        }
    }
    updateCounter();
    }); 
}
countUp();

// Tabs
const tabs = document.querySelectorAll('[data-tab-target]');
const tabContents = document.querySelectorAll('[data-tab-content]');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const  target = document.querySelector(tab.dataset.tabTarget);
        tabContents.forEach(tabContent => tabContent.classList.remove('active'));
        tabs.forEach(tab => tab.classList.remove('active'));
        target.classList.add('active');
        tab.classList.add('active');
    })
});



// Swiper Js
const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    spaceBetween: 20,
    slidesPerView: 1,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.next-btn',
      prevEl: '.prev-btn',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
    breakpoints: {
        800: {
            slidesPerView: 2,
        },
    }
  });


// Preloader
const loader = document.querySelector('.loader-container');
  window.addEventListener('DOMContentLoaded', ()=> {
    bodyEl.classList.add('no-sc');
    setTimeout(() => {
        loader.remove();
        bodyEl.classList.remove('no-sc');
    }, 1500)
})