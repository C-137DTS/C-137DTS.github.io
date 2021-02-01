const BURGER_MENU = document.querySelector('.menu__btn')
const NAV = document.querySelector('.nav')
const HEADER = document.querySelector('.header')

BURGER_MENU.addEventListener('click', () => {
    if (BURGER_MENU.classList.contains('open')){
        BURGER_MENU.classList.remove('open')
        NAV.style.display = 'none'
        HEADER.style.position = 'initial'
    } else {
        BURGER_MENU.classList.add('open')
        NAV.style.display = 'flex'
        HEADER.style.position = 'fixed'
    }
})