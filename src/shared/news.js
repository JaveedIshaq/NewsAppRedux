// Getting All News from newsapi.org
const url =
  "https://newsapi.org/v2/everything?q=pakistan&apiKey=3396e5f14ee94497908b430995a9d7ea";

export async function getNews() {
  let result = await fetch(url).then(response => response.json());
  return result.articles;
}
