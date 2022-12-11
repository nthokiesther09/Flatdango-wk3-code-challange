const url = "http://localhost:3000/films"

const moviePlaceHolder = ()=>{
    fetch(url)
    .then(res =>res.json())
    .then(content =>{
        const firstMovie = content[0]

        const filmImg = document.getElementById("poster")
        const movieTitle = document.getElementById("filmTitle")
        const movieDescr = document.getElementById("movieDescription")
        const runningTime = document.getElementById("runtime")
        const showingTime = document.getElementById("showtime")
        const availTicket =document.getElementById("ticketsAvailable")