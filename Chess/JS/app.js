const openMenuBtn = document.querySelector('.open-menu-btn');
const closeMenuBtn = document.querySelector('.close-menu-btn');
const mobileMenu = document.querySelector('#mobile-navigation');
const headeEl = document.querySelector('#header');
const themeToggleBtn = document.querySelectorAll('.theme-toggle-btn');
const bodyEl = document.body;
const glider = document.querySelector('.glider-contain');
const navLinks = document.querySelectorAll('.mobile-navigation .nav-link');
const sliderImage = document.querySelector('.hero-image img');



const sliderImages = [
    {
        id: 1,
        src: 'images/hero-image-1.jpg'
    },
    {
        id: 2,
        src: 'images/hero-image-2.jpg'
    },
    {
        id: 3,
        src: 'images/hero-image-3.jpg'
    },
    {
        id: 4,
        src: 'images/hero-image-4.jpg',
    },
    {
        id: 5,
        src: 'images/hero-image-5.jpg',
    },
    {
        id: 6,
        src: 'images/hero-image-6.jpg',
    },
    {
        id: 7,
        src: 'images/hero-image-7.jpg',
    },
    {
        id: 8,
        src: 'images/hero-image-8.jpg',
    }
]


// Mobile Navigation

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
});

window.addEventListener('scroll', ()=> {
    if(this.scrollY > 80) {
        headeEl.classList.add('active');
    }
    else {
        headeEl.classList.remove('active');
    }
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

    // BreakPoints

    breakpoints: {
        750: {
            slidesPerView: 2,
        },
    }
  });

//   Loader
const loader = document.querySelector('.loader-wrapper');

function loadIn() {
    loader.classList.add('fade');
}
window.addEventListener('load', loadIn);


// Hero Slider

const pagination = document.querySelector('.pagination');

sliderImages.forEach(img => {
    const bulletPoint = document.createElement('div');
    bulletPoint.classList.add('bullet-point');
    pagination.append(bulletPoint);
})
const bulletPoints = document.querySelectorAll('.bullet-point');

let currentSlideIdx = 0;
function setSliderImages() {
    sliderImage.setAttribute('src', sliderImages[currentSlideIdx].src);
    bulletPoints.forEach(bullet => {
        bullet.classList.remove('active');
        bulletPoints[currentSlideIdx].classList.add('active');
    })
}

// Initial Call
setSliderImages();

const prevSlideBtn = document.querySelector('.prev-slide');
const nextSlideBtn = document.querySelector('.next-slide');

prevSlideBtn.addEventListener('click', () => {
    if(currentSlideIdx === 0){
        currentSlideIdx = sliderImages.length - 1;
    }
    else {
        currentSlideIdx--;
    }
    setSliderImages();
})
nextSlideBtn.addEventListener('click', () => {
    if(currentSlideIdx === sliderImages.length - 1) {
        currentSlideIdx = 0;
    }
    else {
        currentSlideIdx++;
    }
    setSliderImages();
})

