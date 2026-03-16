const API_KEY = "jeP663K4f4WDycucHS1NwZQiuASc2442GEuhqQEG";
const NINJA_API_KEY = "QUqBZA2MnUjay51AfgWyXZEmsIaRblzxfBD0bWjb";

export const fetchAPOD = async () => {
  try {
    const response = await fetch(
      `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`,
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const fetchSpaceNews = async (limit = 5) => {
  const newsURL = `https://api.spaceflightnewsapi.net/v4/articles?_start=0&_limit=${limit}`;

  try {
    const response = await fetch(newsURL);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const articles = await response.json();
    if (!Array.isArray(articles.results)) {
      console.error("API returned unexpected format:", articles);
      return [];
    }

    return articles.results.map((article) => ({
      title: article.title,
      summary: article.summary,
      url: article.url,
      imageUrl: article.image_url,
    }));
  } catch (error) {
    console.error("Failed to fetch space news:", error);
    return [];
  }
};

export const fetchPlanets = async (planet) => {
  try {
    const response = await fetch(
      `https://api.api-ninjas.com/v1/planets?name=${planet}`,
      {
        headers: { "X-Api-Key": NINJA_API_KEY },
      },
    );
    console.log("Response status:", response);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching planets:", error);
    throw error;
  }
};
