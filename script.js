const menuBtn = document.querySelector('#mobile-menu');
const navList = document.querySelector('#nav-links');

menuBtn.addEventListener('click', () => {
    navList.classList.toggle('active');
});