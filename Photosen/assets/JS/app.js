const openMenuBtn = document.querySelector('.open-menu-btn');
const closeMenuBtn = document.querySelector('.close-menu-btn');
const mobileNavigation = document.querySelector('.mobile-navigation');
const navLinks = document.querySelectorAll('.mobile-navigation .nav-link');
const overlay = document.querySelector('.overlay');

openMenuBtn.addEventListener('click', () => {
    let dataState = mobileNavigation.getAttribute("data-state");
    if(dataState == "closed") {
        mobileNavigation.classList.add('active');
        overlay.classList.add('active');    
        mobileNavigation.setAttribute("data-state","opened");
        openMenuBtn.setAttribute("aria-expanded","true");
        closeMenuBtn.setAttribute("aria-expanded","true");
    }
});
closeMenuBtn.addEventListener('click', () => {
    mobileNavigation.classList.remove('active'),
    overlay.classList.remove('active');
    mobileNavigation.setAttribute("data-state","closed");
    closeMenuBtn.setAttribute("aria-expanded","false");
    openMenuBtn.setAttribute("aria-expanded","false");
});

document.addEventListener('mouseup', (event) => {
    if(event.target != mobileNavigation && mobileNavigation.classList.contains('active') && !mobileNavigation.contains(event.target)) {
        mobileNavigation.classList.remove('active'),
        overlay.classList.remove('active');
        mobileNavigation.setAttribute("data-state","closed");
        closeMenuBtn.setAttribute("aria-expanded","false");
        openMenuBtn.setAttribute("aria-expanded","false");
    }
});

// navLinks.forEach(Link => {
//     Link.addEventListener('click', function() {
//         setTimeout(function() {
//             mobileNavigation.classList.remove('active'),
//         overlay.classList.remove('active');
//         mobileNavigation.setAttribute("data-state","closed");
//         closeMenuBtn.setAttribute("aria-expanded","false");
//         openMenuBtn.setAttribute("aria-expanded","false");
//         },500)
//     })
// });
const dropdownBtn = document.querySelector('.mobile-navigation .dropdown-btn');
const submenuBtn = document.querySelector('.mobile-navigation .submenu-btn');

function toggleDropDown() {
    dropdownBtn.classList.toggle('active');
}
function toggleSubmenu() {
    submenuBtn.classList.toggle('active');
}

console.log(submenuBtn);