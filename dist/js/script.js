// Navbar Fixed
window.onscroll = function() {
    const header = document.querySelector('header');
    const fixNav = header.offsetTop;

    if(window.pageYOffset > fixNav) {
        header.classList.add('navbar-fixed')
    } else {
        header.classList.remove('navbar-fixed')
    }
}

// Hamburger
const btnHam = document.querySelector('#btnHam');
const navMenu = document.querySelector('#nav-menu');

btnHam.addEventListener('click', function() {
    btnHam.classList.toggle('active');
    navMenu.classList.toggle('hidden');
});