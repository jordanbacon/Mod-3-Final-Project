// const Movies_URL = "http://localhost:3000/api/v1/movies"
// const Questions_URL = "https://localhost:3000/api/v1/questions"


fetch("http://localhost:3000/api/v1/movies")
    .then(res => res.json())
    .then(movies => {
        movies.forEach(movie => {
            renderMovies(movie)
    })
})

function renderMovies(movie){
    const divMovie = document.querySelector(".movie-list")
    const ul = document.createElement('ul')

    ul.innerText = movie.title
    divMovie.append(ul)

    // let lotrInfo = movie.map()



}
