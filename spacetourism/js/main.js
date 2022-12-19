const navigation = document.querySelector('#navigation');
const menuToggleBtn = document.querySelector('.menu-toggle-btn');




menuToggleBtn.addEventListener('click', ()=> {
    const dataState = navigation.getAttribute("data-state");
    if(dataState === "closed") {
        openNav();
    }
    else if (dataState === "opened") {
        closeNav();
    }
    console.log(dataState);
});

function openNav() {
    menuToggleBtn.setAttribute("aria-expanded","true"),
    navigation.setAttribute("data-state","opened");
}
function closeNav() {
    menuToggleBtn.setAttribute("aria-expanded","false"),
    navigation.setAttribute("data-state","closed");
}
