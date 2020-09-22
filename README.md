# ReduxFeedback

## Duration: 2 Day Sprint

  - ReduxFeedback was a project I undertook at Prime Digital Academy over a weekend. The goal being to create a movie site where users can 

  (Fun fact) You can look through the INSTRUCTIONS.md file if you'd like to see the task I was given and the end result can be seen in the gif below or by setting up the project with the instructions below! However I did also make task lists within this markdown file so it's a mix of instructions and checklists for myself as I tackled this project.

#### Personal Goals

  - My main goals with this project were a few things. First off, experiment with various animation libraries for usage in future projects, solidify my understanding of redux-sagas and table joins with SQL as well as implement a few ARRAY_AGGs in the SQL queries for names and genres of movies. 

### Screen Shots / Gifs

![MovieSagasProject](/documentation/MovieSagasProject.gif)

### Prerequisites

Before you get started, make sure you have the following software installed on your computer:

- [Node.js](https://nodejs.org/en/)
- [PostrgeSQL](https://www.postgresql.org/)
- [Nodemon](https://nodemon.io/)

### Setup Instructions

1. Set up a database for the information.
  * Create a new database named `saga_movies_weekend`.
  * Use `database.sql` to create tables in `saga_movies_weekend`.
  
2. Let's run some commands.
   * Run `npm install`
   * Start postgres if not running already with `brew services start postgresql`
   * Run `npm run server`
   * Run `npm run client` this should open up a new browser tab for you :)
     * If no tab opens, navigate to `localhost:3000`

### Usage

A user will navigate a home screen of popular movies. Here they can click on any movie card to be brought to a description of that movie as well as see all of the genres for said movie. If they'd like they also can edit movies descriptions and attached genres by clicking the edit button, updating or removing information and pressing save changes. 

### Built With / Technologies Used

  - PinDo was built using the following technologies:
      1. Node
      2. Express
      3. SQL
      4. PostgreSQL
      5. React
      6. Redux
      7. Redux-Saga
  
  - Some of more notable libraries used were:
      * axios
      * material-ui
      * react-router-dom
      * react-reveal

  - Styling libraries
      * material-ui/core
      * material-ui/icons

#### Future Goals

  * These are some of the things that didn't quite get done in this 2 day project.

  * Adding genre capabilities.
  * Styling touch-ups.
  * Admin view (taking away the ability to edit movies/descriptions/genres unless you are an admin)
  
### Acknowledgement and Thanks

   - Many thanks to Prime Digital Academy.
   
   - My friend Joel Roske for being so funny and making funny quips as I was showing him some animations I was experimenting with. You're a wonderful friend and have a wonderful sense of humor.

#### Support
  - If you have suggestions or issues, or are looking to get in touch, please email me at RobertEJohnson10@gmail.com.

