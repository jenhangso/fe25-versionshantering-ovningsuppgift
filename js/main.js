// import {  } from "./moduler/displayFunctions.js";
// import {  } from "./moduler/apiFunctions.js";

const menuBtn = document.querySelector('#mobile-menu');
const navList = document.querySelector('#nav-links');

menuBtn.addEventListener('click', () => {
    navList.classList.toggle('active');
});