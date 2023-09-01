

const toggleMenu = document.querySelector('.header__toggle i'),
headerNavConiner = document.querySelector('.header__nav__container'),
headerNavLinks = document.querySelectorAll('.header__nav__link a'),
toTopBtn = document.querySelector('.home__to__top__button');


// ======================== DISPLAY MOBILE MENU======================

toggleMenu.addEventListener('click', ()=>{
    if(toggleMenu.classList.contains('bx-menu')){
        toggleMenu.classList.replace('bx-menu', 'bx-x');
        headerNavConiner.style.display = 'flex';
    }else{
        toggleMenu.classList.replace('bx-x', 'bx-menu');
        headerNavConiner.style.display = 'none';
    }
})


// // =============================== CANCEL NAV after clicking a link

// headerNavLinks.forEach(link =>{
//     link.addEventListener('click', ()=>{
//         toggleMenu.classList.replace('bx-x', 'bx-menu');
//         headerNavConiner.style.display = 'none';
//     })
// })


// ============================= Scroll a little before showing the toTopBtn

window.addEventListener("scroll", ()=>{
    let windowScroll = window.scrollY;
    if(windowScroll > 400){
        toTopBtn.style.display = "flex";
    }else{
        toTopBtn.style.display = "none";
    }
})