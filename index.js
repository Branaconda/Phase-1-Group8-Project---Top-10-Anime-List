
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
    animeData.forEach(anime => renderAnime(anime))
}

function renderAnime(anime) {
    
    const animeName = document.createElement('p')
    animeName.innerText = anime.name
    
    const animeImage = document.createElement('img')
    animeImage.src = anime.image;
    animeImage.alt = anime.alt;

    if (anime.id <= 5){
        const leftImages = document.getElementById("left-images")
        animeImage.className = "left"
        leftImages.appendChild(animeImage)
        leftImages.appendChild(animeName)
        
        
    } else {
        const rightImages = document.getElementById("right-images")
        animeImage.className = "right"
        rightImages.appendChild(animeImage)
        rightImages.appendChild(animeName)
    }
    animeImage.addEventListener('click', () => {
        const bigPicture = document.getElementById("default-anime-image")
        bigPicture.src = anime.image

        const bigTitle = document.getElementById("anime-title")
        bigTitle.innerText = anime.name

        const bigSummary = document.getElementById("anime-description-body")
        bigSummary.innerText = anime.description
    })
}

function likeButton() {
    const likeButton = document.getElementById("buttons")
    likeButton.addEventListener('mouseover', () => {
        document.getElementById("like-button").hidden = true;
        document.getElementById("like-button2").hidden = false
    },
    false
)}

likeButton()
