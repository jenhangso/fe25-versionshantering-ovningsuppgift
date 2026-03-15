const API_KEY = 'jeP663K4f4WDycucHS1NwZQiuASc2442GEuhqQEG';
const NINJA_API_KEY = 'QUqBZA2MnUjay51AfgWyXZEmsIaRblzxfBD0bWjb';

export const fetchAPOD = async () => {
    try {
        const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};

export const fetchPlanets = async (planet) => {
    try {
        const response = await fetch(`https://api.api-ninjas.com/v1/planets?name=${planet}`, {
            headers: { 'X-Api-Key': NINJA_API_KEY }
        });
        console.log('Response status:', response);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching planets:', error);
        throw error;
    }
}