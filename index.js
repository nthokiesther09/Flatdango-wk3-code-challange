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
        filmImg.src = firstMovie.poster
            movieTitle.innerText = firstMovie.title
            movieDescr.textContent = firstMovie.decription
            runningTime.innerText =`Runtime: ${firstMovie.runtime} minutes`
            showingTime.innerText =`Showtime: ${firstMovie.showtime}`
            availTicket.innerText =`Tickets Available: (${firstMovie.capacity - firstMovie.tickets_sold})`


            const ticketBuy = document.getElementById("buyTicket")
            let tickets = Number(firstMovie.capacity - firstMovie.tickets_sold)
