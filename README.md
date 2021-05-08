# BOOK APP :book:


## INTRO

👋 Hi! I am Ewa, and this is my portfolio project - web application called The Book App. Please notice, this is MVP, not a final version. I implemented the most important features, [the other ones](https://github.com/users/ewa-mi/projects/1) will be added in the future. 

## THE BOOK APP

...is dedicated to book lovers, who want to have an overview of books they already read. As a user of The Book App you can create your books collections, rate books and write reviews and share your opinions with the world. Moreover, you can follow literary news and book recommendations.

- [Wireframe](https://github.com/ewa-mi/book-app-client/blob/master/attachments/wireframe-book-app.pdf)
- [UML](https://github.com/ewa-mi/book-app-client/blob/master/attachments/Book%20App%20UML.png)
- [Kanban task board & expanded version of the user stories](https://github.com/users/ewa-mi/projects/1)


## DEMO APP

![Homepage](https://github.com/ewa-mi/book-app-client/blob/master/attachments/homepage.png)
![Collection Page](https://github.com/ewa-mi/book-app-client/blob/master/attachments/collection%20page.png)
![Book Page](https://github.com/ewa-mi/book-app-client/blob/master/attachments/book%20page.png)

## USER STORIES

## Primary

As a user, I want to...

- See recent reviews on the Homepage to know which books are worth to read
- Sign up, Log in & Log out to be able to create my books collections, rate books and write reviews
- Create books collection/-s and add book/-s automatically to my collection (by providing ISBN) to have an overview of books I already read
- Create a review of my books (1 review per book) to express my opinion and share it with other users
- See other users collections with all the extras (stars, reviews, etc.) to know other users opinions and interests

## Additional

As a user, I want to...

- See book recommendations and literary news on the Homepage to learn about something interesting
- Star my books to remember if that book was good and to let other users know how I rate that book
- Like other users reviews to express my positive opinion on their review

## TECHNOLOGY USED

Click to see samples in my project:

- [React](https://github.com/ewa-mi/book-app-client/blob/master/src/App.js)
- [Redux](https://github.com/ewa-mi/book-app-client/tree/master/src/store)
- [Express](https://github.com/ewa-mi/book-app-server/blob/master/index.js)
  - [REST API](https://github.com/ewa-mi/book-app-server/blob/master/routers/bookscollection.js)
- [Sequelize](https://github.com/ewa-mi/book-app-server/blob/master/models/book.js)
- [CSS](https://github.com/ewa-mi/book-app-client/blob/master/src/pages/HomePage/index.css)
- [React-Bootstrap](https://github.com/ewa-mi/book-app-client/blob/master/src/pages/SignUp/index.js)

## GOALS FOR THIS PROJECT

- practice full-stack development
- practice working with REST and external api
- apply what I learned so far
- showcase development approach of using wireframe, uml and user stories
- practice disciplined [git usage](https://github.com/ewa-mi/book-app-client/branches)

## SETUP 

- clone the app
- cd into your project
- install dependencies with npm install
- start development server with npm start

HINT: In scr/config/constants you can find this variable: GOOGLE_BOOKS_API_KEY = process.env.REACT_APP_GOOGLE_KEY. Please replace its value with your own Google Books API key. Click [here](https://developers.google.com/books/docs/v1/getting_started) for the details.

## SERVER-REPO

The server side of this project is an Express server connected to a Sequelize database. You will find it [here](https://github.com/ewa-mi/book-app-server)

---
  Click [HERE](https://book-app-portfolio.netlify.app/) to check out the deployed version 









