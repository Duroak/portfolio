const navSlide = () => {
    const burger = document.querySelector('.hamburger');
    const nav = document.querySelector('.menu');

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
    });

} 

navSlide();