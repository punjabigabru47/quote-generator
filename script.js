const api_url = "https://api.quotable.io/random";
const quote = document.querySelector('#quote');
const author = document.querySelector('#author');


async function getQuote(url) {
  let response = await fetch(url);
  let data = await response.json();

  quote.innerHTML = data.content;
  author.innerHTML = data.author;
  
}

getQuote(api_url);

function tweet() {
  window.open("https://twitter.com/intent/tweet?text=" + quote.innerHTML + '----by ' + author.innerHTML, "tweet window", "width=600px height 300px");
}





