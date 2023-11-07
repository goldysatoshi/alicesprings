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

const animationObjects = document.querySelectorAll('.animation-object');

animationObjects.forEach(animationObject => {
    
    const showAnimation = () => {
        animationObject.classList.add('animation');
        // observe.unobserve(animationObject)
    }
    
    const animationObserver = new IntersectionObserver(showAnimation);
    
    animationObserver.observe(animationObject);
});


