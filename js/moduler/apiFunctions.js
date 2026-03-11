const API_KEY = 'jeP663K4f4WDycucHS1NwZQiuASc2442GEuhqQEG';

export async function getAstronomyPicture() {
    const url = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw "Oops! Something went wrong on our end";
        }
        const value = await response.json();
        return value.results;
        }
        catch (error) {
            throw error;
    }
}