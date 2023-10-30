const menuBtn = document.querySelector('.menu-btn');
const menuList = document.querySelector('.nav-list');

menuBtn.addEventListener('click', () => {
    menuList.classList.toggle('menu-open');

    if(menuBtn.innerHTML === 'menu') {
        menuBtn.innerHTML = 'close';
    } else {
        menuBtn.innerHTML = 'menu';
    }
})

const animationObject = document.querySelector('.animation-object');

const showAnimation = () => {
    animationObject.classList.add('animation');
}

const animationObserver = new IntersectionObserver(showAnimation);

animationObserver.observe(document.querySelector('.animation-object'));


