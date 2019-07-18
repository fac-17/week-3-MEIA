# Week 3 API Project: Team MEIA 
![Imgur](https://i.imgur.com/CHxLH72.png)
## Team
-  [Jan](https://github.com/crianonim)
-  [Sarah](https://github.com/sarahyjja)
-  [Andy](https://github.com/andy-mc-donald)
-  [Reuben](https://github.com/reubengt)
## Description 
A simple web app (ideally just a single page) that queries at least two APIs and uses the results to update the DOM.
![fun fun fun gif](https://media.giphy.com/media/XOXdQszYm4I3m/giphy.gif)

## Concept

#### Trainspiraton 

:train: London is one of the world's leading business centres with a public transport network to match. Business and travel, trains and inspiration; get a daily dose of wisdom live from trainspiration. :chart:

## User Stories
We want to create a useful web app that tells users:
* the time and date 
* up-to date travel information 
* a randomly generated picture...
* ... overlayed with an inspirational corporate quote! 

## Potential stretch goals

* Use a favicon
* Add a London weather API section
* Link the randomly generated picture to weather conditions by using 'weather state' keywords to generate the correct image
* Introduce more weather location options?

## Build process
- We thought of a feature first, design later approach, as learning about apis is the main goal of this project.
- We first decided on which apis to use, we were looking for APIs that had high or no response limits, and no api keys.
- Then we decided to abstract away our XMLHttpRequest functionality into a single reusable function, inside a logic.js file.

  ![mind blown gif](https://media.giphy.com/media/26ufdipQqU2lhNA4g/giphy.gif)

- This function was then used for each of our api calls, inside separate feature-*.js files
- The tfl api call has a few helper functions, to add the necessary classes to change css based on line status
- The image and text come from two different apis, they were combined and styled to have the text overlap the image.
- We then added a section to display the date and time( Javascript Date Object woohoo)
- Finally, we worked on design and layout.

## Problems

* Initially we were going to use the weather API and have TFL API as a stretch goal, but we switched the two around after running into problems with the weather API. 
* The weather API had a very low request limit, and we struggled to find a non-limited weather api, which wasted like an hour, eventually gave up on displaying the weather.  
![make it stop gif](https://media.giphy.com/media/ERMGXqtKTDKHC/giphy.gif)  
* Towards the end of the build we wanted to use grid to structure the elements on the page, but scrapped this after realising that flex and flex-wrap was a better and simpler way to organise everything (as we didn't sketch out the element sizings from the outset) 


## What we learnt 
* Abstracting XttpRequest into a reusable function!
* THE TFL API IS AWESOME!
* how to grab data from APIs, creating html elements, and injecting the data into the page.
* how to prevent images from distorting
* being too loose on page design leads to complications in the end. A feature first approach was nice because we wanted to focus on the APIs, but we should've done some more planning on design(not just wireframing, discussing implementation in css)
