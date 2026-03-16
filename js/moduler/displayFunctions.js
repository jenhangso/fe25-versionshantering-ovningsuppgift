import { fetchAPOD } from "./apiFunctions.js";

export const loadAPOD = async () => {
  try {
    const data = await fetchAPOD();
    const mediaDiv = document.getElementById("apod-media");
    
    mediaDiv.innerHTML = "";

     if (data.media_type === "image") {
      const img = document.createElement("img");
      img.src = data.url;
      img.alt = data.title;
      img.style.maxWidth = "100%"; 
      mediaDiv.appendChild(img);
    } else if (data.media_type === "video") {
      const iframe = document.createElement("iframe");
      iframe.src = data.url;
      iframe.width = "100%";
      iframe.height = "400";
      iframe.frameBorder = "0";
      iframe.allowFullscreen = true;
      mediaDiv.appendChild(iframe);
    }

    document.getElementById("apod-title").textContent = data.title;
    document.getElementById("apod-description").textContent = data.explanation;
  } catch (error) {
    console.error("Failed to load APOD:", error);
  }
};
