export function displayAFOD(data) {
    const apodDisplay = document.querySelector('#apod-display');
    const apodInfoTitle = document.querySelector('#apod-title');
    const apodInfoExplenation = document.querySelector('#apod-explanation');
    
    if (data.media_type === 'image') {
        const image = document.createElement('img');
        image.src = data.url;
        image.alt = data.title;
        apodDisplay.appendChild(image);
    }
    else if (data.media_type === 'video') {
        const video = document.createElement('iframe');
        video.src = data.url;
        video.allowFullscreen = true;
        apodDisplay.appendChild(video);
    }
    apodInfoTitle.textContent = data.title;
    apodInfoExplenation.textContent = data.explanation;
}