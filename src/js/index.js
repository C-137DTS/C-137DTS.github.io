const BURGER_MENU = document.querySelector('.menu__btn')

BURGER_MENU.addEventListener('click', () => {
    (BURGER_MENU.classList.contains('open'))
        ? BURGER_MENU.classList.remove('open')
        : BURGER_MENU.classList.add('open')
})