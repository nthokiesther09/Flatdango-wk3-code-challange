const url = "http://localhost:3000/films"

const moviePlaceHolder = ()=>{
    fetch(url)
    .then(res =>res.json())
    .then(content =>{
        const firstMovie = content[0]

        const filmImg = document.getElementById("poster")
        const movieTitle = document.getElementById("movieTitle")
        const movieDescr = document.getElementById("movieDescription")
        const runningTime = document.getElementById("runtime")
        const showingTime = document.getElementById("showtime")
        const availableTicket =document.getElementById("ticketsAvailable")
        filmImg.src = firstMovie.poster
            movieTitle.innerText = firstMovie.title
            movieDescr.textContent = firstMovie.decription
            runningTime.innerText =`Runtime: ${firstMovie.runtime} minutes`
            showingTime.innerText =`Showtime: ${firstMovie.showtime}`
            availableTicket.innerText =`Tickets Available: (${firstMovie.capacity - firstMovie.tickets_sold})`


            const ticketBuy = document.getElementById("buyTicket")
            let tickets = Number(firstMovie.capacity - firstMovie.tickets_sold)
            ticketBuy.addEventListener('click',()=>{

                tickets--


                if(tickets <= 0){
                    const frstMovie = document.getElementById("1")
                    frstMovie.innerHTML=`${firstMovie.title}  <span class="badge bg-danger me-1">SOLD OUT</span>`

                    availableTicket.innerHTML = `Ticketd available:  <span class="badge bg-danger">SOLD OUT</span>`
                }else{
                    availableTicket.innerText = `Tickets available: (${tickets})`
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
                    const filmTitle = document.getElementById("movieTitle")
                    const filmDescr = document.getElementById("movieDescription")
                    const runTime = document.getElementById("runtime")
                    const showTime = document.getElementById("showtime")
                    const availableTickets =document.getElementById("ticketsAvailable")

                    filmImage.src = item.poster
                    filmTitle.innerText = item.title
                    filmDescr.textContent = item.decription
                    runTime.innerHTML =`Runtime:<span>${item.runtime}</span>`
                    showTime.innerText =`Showtime: ${item.showtime}`
                    availableTickets.innerText =`Tickets available: (${item.capacity - item.tickets_sold})`

                    ticketsBuy.addEventListener('click',()=>{

                        ticket --
                        if(ticket <= 0){
                            movieList.innerHTML =`${item.title} <span class="badge bg-danger">SOLD OUT</span>`

                            availableTickets.innerHTML = `Tickets available: <span class="badge bg-danger">SOLD OUT</span>`

                        }else{

                            availableTickets.innerText = `Tickets available: (${ticket})`
                        }
                       
                    })



                })


            }




        })

    }

    movieDetails()
    moviePlaceHolder()



