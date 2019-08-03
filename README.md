# BookTracker
BookTracker is a MERN application that allows users to search for books via the Google Books API, add books to their reading list, and monitor their completion status.

## Development Process
Submitting a search sends an GET request via Axios to pull matching book data from the Google Books API and displays it on the page in card format.

Clicking on the ellipsis embedded on each card prompts the user to add the book to the corresponding section. By adding the book, a POST request is sent to the database in order to create a new instance of the book.

## Future Development
* Add a modal message upon successfully adding a book to the database
* Determine a way to prevent users from adding in the same book

## View Demo
[View Demo Here](https://booktracker-ett.herokuapp.com/)

## Technologies Used
* [MongoDB](https://www.mongodb.com/)
* [Mongoose](https://www.npmjs.com/package/mongoose)
* [Express](https://www.npmjs.com/package/express)
* [React](https://reactjs.org/)
* [Axios](https://www.npmjs.com/package/axios)