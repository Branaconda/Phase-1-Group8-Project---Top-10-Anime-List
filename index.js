
// document.addEventListener('DOMContentLoaded', () => fetchAnime)

const mainUrl = "http://localhost:3000/"
const animeUrl = mainUrl + "anime/"


function fetchAnime(){
    fetch(animeUrl)
    .then(response => response.json())
    .then(animeData => iterateFunction(animeData))
}

fetchAnime()

function iterateFunction(animeData){
    animeData.forEach(anime => console.log(anime))
}

function renderAnime(anime) {
    
}