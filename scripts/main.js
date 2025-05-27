// Reveal navbar
let lastScrollTop = 0;
    const navbar = document.querySelector('.fixed-nav');

    window.addEventListener('scroll', function () {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > lastScrollTop && scrollTop > 20) {
            navbar.classList.add('show');
        } else {
            navbar.classList.remove('show');
        }

        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scroll
});

const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-mobile .nav-links');

hamburger.addEventListener('click', () => {
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
});