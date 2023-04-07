
// document.addEventListener('DOMContentLoaded', () => fetchAnime)

const mainUrl = "http://localhost:3000/"
const animeUrl = mainUrl + "anime/"
const commentsUrl = mainUrl + "comments/"

function fetchAnime(){
    fetch(animeUrl)
    .then(response => response.json())
    .then(animeData => iterateAnime(animeData))
    // .then(animeData =>forEaching(animeData))
}

fetchAnime()

function fetchComments(){
    fetch(commentsUrl)
    .then(response => response.json())
    .then(commentsData => iterateComments(commentsData))
}

fetchComments()


function iterateComments(commentsData){
    commentsData.forEach(comment=>renderComments(comment))
}
function renderComments(comment){
    const commentContainer = document.getElementById("comment-container")
    const commentLi = document.createElement("li")
    commentLi.innerText = `${comment.username}: ${comment.content}`
    commentContainer.appendChild(commentLi)
}





function iterateAnime(animeData){
    console.log(animeData)
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
    const likeButton = document.getElementById("all-like-buttons")
    likeButton.addEventListener('mouseover', () => {
        document.getElementById("like-button").hidden = true;
        document.getElementById("like-button2").hidden = false

    },
)}

likeButton()

function dislikeButton() {
    const dislikeButton = document.getElementById("all-dislike-buttons")
    dislikeButton.addEventListener('mouseover', () => {
        document.getElementById("dislike-button").hidden = true;
        document.getElementById("dislike-button2").hidden = false
    },
)}

dislikeButton()

// Navigation Bar Mouseover stuff
    let navBarHover = document.getElementById('button1')
    navBarHover.addEventListener('mouseover', function buttonColor(){
        button1.style.backgroundColor = '#95EBE6';
        button2.style.backgroundColor = '#FA8072';
        button3.style.backgroundColor = '#FF5733';
        button4.style.backgroundColor = '#FF7F50';
    })

let form = document.getElementById('comment-form')

form.addEventListener('submit', (event) => {
    event.preventDefault();

    let newComment = {
            'username': form.name.value,
            'content': form.comment.value,
        } 

    renderComments(newComment);
    form.reset();
})

