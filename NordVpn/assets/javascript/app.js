const header = document.querySelector('#header');
const mobileNavigation = document.querySelector('.mobile-navigation');
const menuOpenBtn = document.querySelector('.menu-open-btn');
const menuCloseBtn = document.querySelector('.menu-close-btn');
const overlay = document.querySelector('.overlay');

// Header styles on scroll
window.addEventListener('scroll', () => {
    if(this.scrollY > 10) {
        header.classList.add('scrolling');
    }   
    else {
        header.classList.remove('scrolling');
    }
});

// Mobile navigation toggle
menuOpenBtn.addEventListener('click', () => {
    mobileNavigation.classList.add('opened');
    document.body.classList.add('no-scrolling');
    overlay.classList.add('opened');
    mobileNavigation.setAttribute('aria-expanded', 'true');
});
menuCloseBtn.addEventListener('click', () => {
    if(mobileNavigation.classList.contains('opened')) {
        mobileNavigation.classList.remove('opened');
        document.body.classList.remove('no-scrolling');
        overlay.classList.remove('opened');
        mobileNavigation.setAttribute('aria-expanded', 'false');
    }
});
document.body.addEventListener('mouseup', (e) => {
    if(e.target != mobileNavigation && !mobileNavigation.contains(e.target) && e.target != menuCloseBtn) {
        mobileNavigation.classList.remove('opened');
        document.body.classList.remove('no-scrolling');
        overlay.classList.remove('opened'); 
        mobileNavigation.setAttribute('aria-expanded', 'false');
    }
});

// MobileNavigation innerMenu
const dropdownBtns = document.querySelectorAll('.mobile-navigation .dropdown-btn');
dropdownBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        btn.parentElement.classList.add('active');
    });
});
const removeInnerMenu = document.querySelectorAll('.remove-inner-menu');
removeInnerMenu.forEach((btn) => {
    btn.addEventListener('click', () => {
        btn.closest('.has-children').classList.remove('active');
    });
});

// Countdown Timer
const days = document.querySelector('.days');
const hours = document.querySelector('.hours');
const minutes = document.querySelector('.minutes');
const seconds = document.querySelector('.seconds');
const countdown = () => {
    let countDate = new Date('December 10, 2023 00:00:00').getTime();
    let now = new Date().getTime();
    let gap = countDate - now;
    let second = 1000;
    let minute = second * 60;
    let hour = minute * 60;
    let day = hour * 24;
    let textDay = Math.floor(gap / day);
    let textHour = Math.floor((gap % day) / hour);
    let textMinute = Math.floor((gap % hour) / minute);
    let textSecond = Math.floor((gap % minute) / second);

    days.innerText = textDay;
    hours.innerText = textHour;
    minutes.innerText = textMinute;
    seconds.innerText = textSecond;
};
setInterval(countdown, 1000);

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

// Accordions
const accordionButtons = document.querySelectorAll('.faq');
for(let i = 0; i < accordionButtons.length; i++) {
    accordionButtons[i].addEventListener('click', ()=> {
        accordionButtons[i].classList.toggle('active');
    });
}