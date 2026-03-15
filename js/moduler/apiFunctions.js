const API_KEY = 'Pi7bSAtGUiXnYXiwiFXLXlapRNUJoAH9F13jRdbY';

export async function getAPOD() {
const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&date=2025-10-01`);
    const data = await response.json();
if (data.media_type === 'image') {
    const img = document.createElement('img');
    img.src = data.url;
    img.alt = data.title;
    img.style.width = '100%';
    
    img.style.display = 'block';
    document.getElementById('apod-display').appendChild(img);

    document.getElementById('apod-title').textContent = data.title;
    document.getElementById('apod-explanation').textContent = data.explanation;
}
}