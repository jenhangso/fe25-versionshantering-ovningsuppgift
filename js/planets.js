const allPlanetBtn = document.querySelectorAll('.planet-btn');
const infoBox = document.querySelector('.planet-info');

allPlanetBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        infoBox.classList.toggle('active');
    });
});