// import {  } from "./moduler/displayFunctions.js";
import { getAPOD } from "./moduler/apiFunctions.js";

const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
}

document.addEventListener('DOMContentLoaded', () => {

    const themeToggle = document.querySelector('#theme-toggle');
    if (themeToggle) {
        themeToggle.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
        themeToggle.addEventListener('click', () => {
            const isDark = document.body.classList.toggle('dark-mode');
            localStorage.setItem('theme', isDark ? 'dark' : 'light');
            themeToggle.textContent = isDark ? '☀️' : '🌙';
        });
    }

    const menuBtn = document.querySelector('#mobile-menu');
    const navList = document.querySelector('#nav-links');
    if (menuBtn && navList) {
        menuBtn.addEventListener('click', () => {
            navList.classList.toggle('active');
        });
    }

    if (document.getElementById('apod-display')) {
        getAPOD();
    }
});