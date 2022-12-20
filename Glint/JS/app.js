const navigation= document.querySelector('#navigation');
const openMenuBtn = document.querySelector('.menu-open-btn');
const closeMenuBtn = document.querySelector('.menu-close-btn');
const menu = document.querySelector('.menu');
const backToTopBtn = document.querySelector('.back-to-top');
const navLinks = document.querySelectorAll('.navigation .nav-link');
const counters = document.querySelectorAll('.counter');

openMenuBtn.addEventListener('click', () => {
    navigation.classList.add('active');
    openMenuBtn.setAttribute("aria-expanded","true");
    closeMenuBtn.setAttribute("aria-expanded","true");
});

closeMenuBtn.addEventListener('click', () => {
    if(navigation.classList.contains('active')) {
        navigation.classList.remove('active');
        openMenuBtn.setAttribute("aria-expanded","false");
        closeMenuBtn.setAttribute("aria-expanded","false");
    }
});

window.addEventListener('mouseup',(event)=> {
    if(navigation.classList.contains('active') && event.target != navigation && event.target != closeMenuBtn && !navigation.contains(event.target)) {
        navigation.classList.remove('active');
        openMenuBtn.setAttribute("aria-expanded","false");
        closeMenuBtn.setAttribute("aria-expanded","false"); 
    }
});

window.addEventListener('scroll', ()=> {
    if(this.scrollY > 500) {
        menu.classList.add('active');
    }
    else if(this.scrollY > 100) {
        backToTopBtn.classList.add('active');
    }
    else {
        menu.classList.remove('active');
        backToTopBtn.classList.remove('active');
    }
});

navLinks.forEach(link => link.addEventListener('click', function() {
    setTimeout(function() {
        navigation.classList.remove('active');
        openMenuBtn.setAttribute("aria-expanded","false");
        closeMenuBtn.setAttribute("aria-expanded","false"); 
    },700)
}));

function countUp() {
counters.forEach((counter) => {
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
    };
    updateCounter();
})
}
countUp()


// SwiperJS
const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1,
    spaceBetween: 20,
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
    breakpoints: {
        700: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        1000: {
            slidesPerView: 3,
        }
    },
    autoplay: true,
  });
  

  const slider = new A11YSlider(document.querySelector(".slider"), {
    slidesToShow: 1,
    infinite: true,
    arrows: false, // arrows enabled 767px and down
    dots: true,
    swipe: true,
    skipBtn: false,
  });



//   Intersection Observer

const aboutHeader = document.querySelector('.about-header');
const aboutBody = document.querySelector('.about-body');
const servicesHeader = document.querySelector('.services-header');
const service = document.querySelectorAll('.service');
const worksHeader= document.querySelector('.works-header');
const worksBody= document.querySelector('.gallery');


const options = {
	root: null,
	threshold: 0,
	rootMargin: "0px",
};

const observer = new IntersectionObserver(function(entries, observer){
	entries.forEach(entry => {
		if (!entry.isIntersecting) {
			return;
		}
		entry.target.classList.add('visible');
		observer.unobserve(entry.target);
		console.log(entry.target);
	})
} , options);

observer.observe(aboutHeader);
observer.observe(aboutBody);
observer.observe(servicesHeader);
observer.observe(worksHeader);
observer.observe(worksBody);
service.forEach(Service => {
    observer.observe(Service);
})