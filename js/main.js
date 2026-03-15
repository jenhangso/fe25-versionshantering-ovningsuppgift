<<<<<<< Updated upstream
import { fetchAPOD } from "./moduler/apiFunctions.js";
import { displayAFOD } from "./moduler/displayFunctions.js";
=======
import { displayAstronomyPicture } from "./moduler/displayFunctions.js";
import { getAstronomyPicture } from "./moduler/apiFunctions.js";
>>>>>>> Stashed changes

const menuBtn = document.querySelector('#mobile-menu');
const navList = document.querySelector('#nav-links');

const apodDisplay = document.querySelector('#apod-display');
const apodInfoTitle = document.querySelector('#apod-title');
const apodInfoExplenation = document.querySelector('#apod-explanation');

menuBtn.addEventListener('click', () => {
    navList.classList.toggle('active');
});

<<<<<<< Updated upstream
(async () => {
    fetchAPOD().then(apodData => {
        displayAFOD(apodData);
    }).catch(error => {
        apodInfoTitle.textContent = 'Error fetching data';
        apodInfoExplenation.textContent = error.message;
    });
})();
=======
getAstronomyPicture()
  .then( displayAstronomyPicture )
  .catch( error => {
        displayError(error);
    });
>>>>>>> Stashed changes
