import { fetchPlanets } from "./moduler/apiFunctions.js";

const allPlanetBtn = document.querySelectorAll('.planet-btn');
const infoBox = document.querySelector('#planet-info');
const closeBtn = document.querySelector('.close-btn');

closeBtn.addEventListener('click', () => {
    infoBox.classList.remove('active');
    infoBox.classList.add('hidden');
});

allPlanetBtn.forEach(btn => {
    btn.addEventListener('click', async () => {
        const planetName = btn.dataset.planet || btn.querySelector('span').textContent;
        try {
            await fetchPlanets(planetName).then(data => {
                if (data && data.length > 0) {
                    const planet = data[0];
                    const h2 = infoBox.querySelector('h2');
                    h2.textContent = planet.name;
                    const p = infoBox.querySelector('p');
                    p.textContent = `Mass: ${planet.mass} Jupiters\nRadius: ${planet.radius} Jupiters\nPeriod: ${planet.period} days\nTemperature: ${planet.temperature} K\nDistance: ${planet.distance_light_year} light years`;
                    infoBox.classList.remove('hidden');
                    infoBox.classList.add('active');
                }
            }).catch(error => {
                console.error('Error fetching planet details:', error);
                infoBox.classList.remove('active');
                infoBox.classList.add('hidden');
            });
        } catch (error) {
            console.error('Error fetching planet details:', error);
        }
    });
});