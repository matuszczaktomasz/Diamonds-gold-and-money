document.addEventListener('DOMContentLoaded', function () {
    const navMobile = document.querySelector('.nav-mobile');
    const navBtn = document.querySelector('.hamburger');
    const allNavLinks = document.querySelectorAll('.nav-mobile .nav__link');
    const footerYear = document.querySelector('.footer__year');

    const handleNav = () => {
        navBtn.classList.toggle('is-active');
        navMobile.classList.toggle('nav-mobile--active');

        allNavLinks.forEach(link => {
            link.addEventListener('click', () => {
                navBtn.classList.remove('is-active');
                navMobile.classList.remove('nav-mobile--active');
            });
        });
    };

    const handleCurrentYear = () => {
        const year = (new Date).getFullYear();
        footerYear.innerText = year;
    }
    handleCurrentYear();

    navBtn.addEventListener('click', handleNav);
})