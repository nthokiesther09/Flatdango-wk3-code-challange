# FLATDANGO
## App Description
This is an app that allows users to purchase movie tickets from flatiron movie theater.
The movie displays details showing the title, runtime, showtime and the number of tickets available per film.
## Installation Requirements
One requireS; 
1.A computer,tablet
2.Access to internate
## Installation Process

Click on the link below to view the app.

https://nthokiesther09.github.io/Flatdango-wk3-code-challange/


Run this command to get the backend started:

json-server --watch db.json

Test your server by visiting this route in the browser:

http://localhost:3000/films

Then, open the index.html file on your browser to run the application.

Write your code in the index.js file. The base URL for your API will be http://localhost:3000.

## Technology Used
HTML- which was used to build the structure of the pages. 
CSS - which was used to style the pages. Javascript-which was used to make the page functional.

## Reference
Materialize CSS, HTML, JavaScript,Bootstrap js and css.
 
## Core Deliverables

1. A user,one is able to view the first movie's details, including its **poster, title, runtime,
showtime, and available tickets** when the page loads. 

GET /films/1

   Example Response:
   {
     "id": "1",
     "title": "The Giant Gila Monster",
     "runtime": "108",
     "capacity": 30,
     "showtime": "04:00PM",
     "tickets_sold": 27,
     "description": "A giant lizard terrorizes a rural Texas community and a heroic teenager attempts to destroy the creature.",
     "poster": "https://www.gstatic.com/tv/thumb/v22vodart/2157/p2157_v_v8_ab.jpg"
   }
2. A user is able to view the movie menu on the left-side of the page,click on a particular movie to purchase a ticket.
3. Once a ticket is purchased,the number of available tickets reduces by the number of tickets bought.If there are no tickets available the buy ticket button changes to sold out indicating "0" tickets left.
The movie menu updates on the sold out movies indicating to the user all tickets have been bought.

## Authors Information.
Slack Profile - Esther Musyoka [nthokiesther09]-(https://github.com/nthokiesther09/Flatdango-wk3-code-challange)
