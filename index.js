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
            ticketBuy.addEventListener('click',()=>{

                tickets--


                if(tickets <= 0){
                    const frstMovie = document.getElementById("1")
                    frstMovie.innerHTML=`${firstMovie.title}  <span class="badge bg-danger me-1">SOLD OUT</span>`

                    availTicket.innerHTML = `Ticketd available:  <span class="badge bg-danger">SOLD OUT</span>`
                }else{
                    availTicket.innerText = `Tickets available: (${tickets})`
                }
            })

        })

    }
    const movieDetails = ()=>{
        fetch(url)
        .then(response=>response.json())
        .then(data=>{
            console.log(data)
            for(let i = 0; i < data.length; i++){
                let item = data[i]
                console.log(item)
                const movieList = document.createElement("li")
                const list = document.getElementById("allmovies")

                movieList.classList.add("list-group-item", "border", "border-info")

                movieList.setAttribute('id',`${item.id}`)
                movieList.innerText = item.title
                console.log(item.title)
                list.appendChild(movieList)

                movieList.addEventListener('click',()=>{
                    const filmImage = document.getElementById("poster")
                    const filmTitle = document.getElementById("filmTitle")
                    const filmDescr = document.getElementById("movieDescription")
                    const runTime = document.getElementById("runtime")
                    const showTime = document.getElementById("showtime")
                    const availTickets =document.getElementById("ticketsAvailable")

