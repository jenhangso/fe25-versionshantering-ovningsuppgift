import { fetchAPOD, fetchSpaceNews } from "./apiFunctions.js";

export const displayAPOD = async () => {
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
    console.error("Failed to display APOD:", error);
  }
};

export const displaySpaceNews = async () => {
  try {
    const articles = await fetchSpaceNews();
    const container = document.getElementById("news-container");
    container.innerHTML = "";

    if (articles.length === 0) {
      container.innerHTML = "<p>No news articles available.</p>";
      return;
    }

    articles.forEach((article) => {
      const articleEl = document.createElement("article");
      articleEl.className = "news-article";
      articleEl.innerHTML = `
        <h2>${article.title}</h2>
        ${article.imageUrl ? `<img src="${article.imageUrl}" alt="${article.title}" style="max-width:100%;">` : ""}
        <p>${article.summary}</p>
        <a href="${article.url}" target="_blank" class="read-more">Read more</a>
        `;
      container.appendChild(articleEl);
    });
  } catch (error) {
    console.error("Failed to display space news:", error);
  }
};
