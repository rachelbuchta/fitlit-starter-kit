# Activity Tracker
 Mod2 Pair Project

This application displays a user's data for various activities, sleep conditions, and how well they are staying hydrated. When the page is refreshed a new random user's data will be displayed along with stats that show how they compare to the entire user database. 

Building this application allowed us to gain a deeper understanding of how to structure data in their respective classes, as well as how to have those classes interact when needed. We dove deeper into using ES6 syntax, iterator methods, wrtiting TDD tests to drive our code and how to make a page responsive over multiple screens.

## Technologies and Skills

This application is made using:
  * Clean, semantic HTML and CSS including media queries so that is can be viewed across a variety of screens.
  * ES6 Javascript, arrow functions, classes, and iterator methods.
  * Mocha and Chai for our TDD tests.

I ensured best practices:

  * Separating the data model (using classes) and DOM model
  * Implementing helper functions to keep code clean and demonstrate DRYness and SRP.
  * Using atomic commits and creating branches that reflect the current feature I am working on.
  * Writing a robust testing suite that had happy and sad test paths.
  * Refactored to ensure user's accessibility.
  
 ## Contributors
 
 Project implementation by [Rachel Buchta](https://github.com/rachelbuchta) and [Max Bregman](https://github.com/Max9545) 
 
 Project created by Turing School staff.
 
 Special thanks to John Adams, [Steve Kinney](https://github.com/stevekinney), and our 2010 FE Cohort instructors and peers.
 
 ## Future Iterations
 
 Currently, there are no planned additions to this Activity Tracker.
 
If we did, we would make it interactive so a user could access more in depth information by clicking on a widget. Also we would implement Charts.js to display our data instead of having tables of digits which would be more user friendly and aesthetically pleasing. Eventual use of a server to pull data from that instead of a static set of data in our repository.
 
 ## Features
 
![Window sizing](https://media.giphy.com/media/25ULMFmPK0ERLYHtKx/giphy.gif)

![User Change](https://media.giphy.com/media/GXXhxrWmPDRMGfVXC4/giphy.gif)

 ### User Functionality

On page load a user is shown:

* A greeting welcoming the user to the page by using their first name
* A display of their daily step goal, stride length, and how their step goal compares to the average of all other users' step goals

#### Activity

* Minutes a user was active for and how it compares to the average of all users for that day.
* The amount of steps a user has taken, how many miles those steps equate to and how it compares to the average steps of all users for that day.
* How many flights of stairs a user has climbed based on the amount of steps they have taken for the day and how that compares to the average number of stairs climbed for all users on that day.
* An overview of steps taken, minutes active, and flights of stairs climbed for the last 7 day period. 
 
#### Water

* The amount of water consumed in ounces during the lastest day.
* The amount of water consumed each day over the last 7 day period.

#### Sleep

* The hours and quality of sleep a user has gotten over the latest day.
* The user's average hours and quality of sleep over all time.
* The user's hours and quality of sleep for each day over the last 7 day period
