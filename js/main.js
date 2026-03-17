import { displayAPOD, displaySpaceNews } from "./moduler/displayFunctions.js";

const menuBtn = document.querySelector("#mobile-menu");
const navList = document.querySelector("#nav-links");
const themeToggle = document.querySelector('#theme-toggle');

menuBtn.addEventListener("click", () => {
  navList.classList.toggle("active");
});
displayAPOD();
displaySpaceNews();
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
if (themeToggle) {
    themeToggle.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
    themeToggle.addEventListener('click', () => {
        const isDark = document.body.classList.toggle('dark-mode');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
        themeToggle.textContent = isDark ? '☀️' : '🌙';
    });
}

if (menuBtn && navList) {
    menuBtn.addEventListener('click', () => {
        navList.classList.toggle('active');
    });
}

if (document.getElementById('apod-display')) {
    getAPOD();
}

