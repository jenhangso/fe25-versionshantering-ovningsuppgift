import { fetchAPOD } from "./moduler/apiFunctions.js";
import { displayAFOD } from "./moduler/displayFunctions.js";

const menuBtn = document.querySelector('#mobile-menu');
const navList = document.querySelector('#nav-links');

const apodDisplay = document.querySelector('#apod-display');
const apodInfoTitle = document.querySelector('#apod-title');
const apodInfoExplenation = document.querySelector('#apod-explanation');

menuBtn.addEventListener('click', () => {
    navList.classList.toggle('active');
});

(async () => {
    fetchAPOD().then(apodData => {
        displayAFOD(apodData);
    }).catch(error => {
        apodInfoTitle.textContent = 'Error fetching data';
        apodInfoExplenation.textContent = error.message;
    });
})();