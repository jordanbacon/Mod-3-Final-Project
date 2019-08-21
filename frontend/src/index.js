document.addEventListener("DOMContentLoaded", () => {

const BASE_URL = "http://localhost:3000"
const MOVIES_URL = `${BASE_URL}/api/v1/movies`
const QUESTIONS_URL = `${BASE_URL}/api/v1/questions`
const rightContainer = document.querySelector("#right-container")
const rulesIcon = document.querySelector("#rules-icon")
const playButton = document.querySelector("#play-button")

rulesIcon.addEventListener('click', displayRules)
playButton.addEventListener('click', playGame)


fetch(MOVIES_URL)
.then(res => res.json())
.then(movies => {
    movies.forEach(movie => {
        movieCard(movie)
    })
})

function movieCard(movie){
    const main = document.querySelector("main")

    const div = document.createElement("div")
    div.className = "card"
//     div.setAttribute("data-id", movie.id)

    const p = document.createElement("p")
    p.innerText = movie.title

    const btn = document.createElement("button")
//     btn.setAttribute("data-movie-id", movie.id)
    btn.innerText = "Select This Movie"

    btn.addEventListener("click", () => {
        SelectMovie(movie.id, div)
        
    })

    const ul = document.createElement("ul")

    movie.questions.forEach(question => {

        const li = renderQuestion(question)

        ul.append(li)
    })

    div.append(p, btn)

    main.append(div)

}

function SelectMovie(id, div){
    console.log(div)
    fetch(QUESTIONS_URL, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "movie_id": id
        })
    })
    .then(res => res.json())
    .then(question => {
        if(!question.error){
            const newli = renderQuestion(question) 
    
            div.children[2].append(newli)
        }
        })
    }

function renderQuestion(question){
//     const li = document.createElement("li")
//     li.innerText = `${question.description}`

//     const button = document.createElement("button")
//     button.innerText = "Answer"
//     button.className = "answer"
    // button.setAttribute("data-question-id", question.id)

    // button.addEventListener("click", () => {
    //     fetch(`${QUESTIONS_URL}/${question.id}`,{
    //         method: "POST"
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify({
    //             "question_id": id
    //         })
    //     })
    //     .then(res => res.json())
    //     .then(question => {
    //             const newli = renderQuestion(question) 
    //     })
    }

    function displayRules() {
        rightContainer.innerHTML = ''
        rightContainer.innerHTML =
        `<div class="ui raised segment">
        <a class="ui blue ribbon label">Rules</a>
        <h2>Welcome Movie Buffs!</h2>
        <p>Think you know your movies? Choose a movie and let's see! </p>
        <p><b>SCORING</b><br>
        You’ll score one point for every question answered correctly. 
        </p>
        <p>If you're having a rough time, you get ONE free pass per game. Use it wisely! </p>
        <h3></h3>
        </div>
        `
      }

    function playGame(){
        wordInputField.disabled = false
        wordInputField.style.background = "white"
        gameContainer.innerHTML = ""
        startPlay()
        playButton.style.display = "none"
      }

    })