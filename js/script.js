let categoryChoice = ''
const BASE_URL = 'https://newsapi.org/v2';
const CATEGORY = categoryChoice
const API_KEY = password //change password to API_Key or add a key.js with your api_key
const boardNews = document.querySelector('#listaDeNoticias')

const BUSINESS = 'category=business&'
const ENTERTAINMENT = 'category=entertainment&'
const GENERAL = 'category=general&'
const HEALTH = 'category=health&'
const SCIENCE = 'category=science&'
const SPORTS = 'category=sports&'
const TECHNOLOGY = 'category=technology&'
const NOCHOICE = ''

// fetch(`${BASE_URL}/top-headlines?country=br&apiKey=${API_KEY}`)
//     .then( res => res.json())
//     .then((data) => console.log(data))

async function getNews() {
    boardNews.innerHTML = ""
    let response = await fetch(
        `${BASE_URL}/top-headlines?country=br&${categoryChoice}apiKey=${API_KEY}`
    );
    let data = await response.json();
    return data.articles.forEach(news => {
    if(news.urlToImage == null){
        news.urlToImage = './img/404.jpg'
    }

        boardNews.innerHTML += `
        <div class="col-4">
<div class="card"><img class="card-img-top"
    src="${news.urlToImage}">
  <div class="card-body">
    <h5 class="card-title">${news.title}</h5>
    <p class="card-text">${news.description}</p><a class="btn btn-primary"
      href=${news.source.url}>Ir
      para noticia</a>
  </div>
</div>
</div>`
    });
}

getNews()

function tech() { categoryChoice = TECHNOLOGY;
    getNews()
}

function lastNews() { categoryChoice = NOCHOICE;
    getNews()
}




