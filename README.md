# BookTracker
BookTracker is a MERN application that allows users to search for books via the Google Books API, add books to their reading list, and monitor their completion status.

## Development Process
Submitting a search sends an GET request via Axios to pull matching book data from the Google Books API and displays it on the page in card format.

Clicking on the ellipsis embedded on each card prompts the user to add the book to the corresponding section. By adding the book, a POST request is sent to the database in order to create a new instance of that book. All of the added books are presented in the "/saved" route.

On the "/saved" route, all the saved books are displayed according to their reading status: reading, plan to read, and completed. Users are allowed to remove the book from the list by selecting "Delete Book," which sends a DELETE request to remove the item from the database. Users are also able to change the reading status of each book, which will move the book to the correct section. This is done by sending a PUT request to update the status and refreshing the display by sending a GET request afterwards to redisplay the data. 

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