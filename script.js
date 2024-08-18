const api_url = "https://api.quotable.io/random";

async function getQuote(url) {
  let response = await fetch(url);
  let data = await response.json();
  console.log(data);
}

getQuote(api_url);