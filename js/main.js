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

    const showAnimation = (entries, obs) => {
        entries.forEach((entry) => {
            if(entry.isIntersecting){
                entry.target.classList.add('animation');
                console.log(entry.target)
                
                obs.unobserve(entry.target);
            }
        })
    }
    
    const animationObserver = new IntersectionObserver(showAnimation);
    

const animationObjects = document.querySelectorAll('.animation-object');
animationObjects.forEach((animationObject) => {
    animationObserver.observe(animationObject);
})





const header = document.querySelector('.header-wrapper');
const headerObject = document.querySelector('.headerObject');
const colorChange = (entries) => {

    if(entries[0].isIntersecting !== true){
        header.classList.add('header-change');
    } else {
        header.classList.remove('header-change');
    }

    // console.log(entries[0].isIntersecting);
}

const headerObserver = new IntersectionObserver(colorChange);

headerObserver.observe(headerObject);




