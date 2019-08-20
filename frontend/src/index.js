document.addEventListener("DOMContentLoaded", () => {

const BASE_URL = "http://localhost:3000"
const MOVIES_URL = `${BASE_URL}/api/v1/movies`
// const QUESTIONS_URL = `${BASE_URL}/api/v1/questions`

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
    btn.innerText = "Select Movie"

//     btn.addEventListener("click", () => {
//         SelectMovie(movie.id, div)
        
//     })

//     const ul = document.createElement("ul")

//     trainer.pokemons.forEach(question => {

//         const li = renderQuestion(question)

//         ul.append(li)
//     })

    div.append(p, btn)

    main.append(div)

}



})







// function SelectMovie(id, div){
//     console.log(div)
//     fetch(QUESTIONS_URL, {
//         method: "POST",
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//             "movie_id": id
//         })
//     })
//     .then(res => res.json())
//     .then(question => {
//         // if(!question.error){
//             const newli = renderQuestion(question) 
    
//             div.children[2].append(newli)
//         }
//     })
// }

// function renderQuestion(question){
//     const li = document.createElement("li")
//     li.innerText = `${question.description}`

//     const button = document.createElement("button")
//     button.innerText = "Answer"
//     button.className = "answer"
//     button.setAttribute("data-question-id", question.id)

//     button.addEventListener("click", () => {
//         fetch(`${QUESTIONS_URL}/${question.id}`,{
//             method: "POST"
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({
//                 "question_id": id
//             })
//         })
//         .then(res => res.json())
//         .then(question => {
//                 const newli = renderQuestion(question) 
//             }
//         })
    // }