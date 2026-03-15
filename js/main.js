// import {  } from "./moduler/displayFunctions.js";
import { getAPOD } from "./moduler/apiFunctions.js";

const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
}

document.addEventListener('DOMContentLoaded', () => {

    const audio = new Audio('/audio/space.mp3.wav');
audio.loop = true;
audio.volume = 0.3;

// Kolla om ljudet var på innan
let soundOn = localStorage.getItem('sound') === 'on';

const soundToggle = document.querySelector('#sound-toggle');
if (soundToggle) {
    // Sätt rätt emoji direkt
    soundToggle.textContent = soundOn ? '🔊' : '🔇';
    
    // Starta ljudet om det var på
    if (soundOn) {
        audio.play().catch(() => {});
    }

    soundToggle.addEventListener('click', () => {
        soundOn = !soundOn;
        localStorage.setItem('sound', soundOn ? 'on' : 'off');
        if (soundOn) {
            audio.play();
            soundToggle.textContent = '🔊';
        } else {
            audio.pause();
            soundToggle.textContent = '🔇';
        }
    });
}
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