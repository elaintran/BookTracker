# BookTracker
BookTracker is a MERN application that allows users to search for books via the Google Books API, add books to their reading list, and monitor their completion status.

## Development Process
* Before submitting a search, the state of query input needs to be updated through incorporating a function that checks the `event.target.value` inside the input element. Submitting a search through either the search bar or selecting a tag from the list sends a `GET` request to Axios to call the Google Books API. At most 10 results are returned and displayed on the page.
* The ellipsis on the corner of every result prompts the user to add the selected book into the corresponding section in accordance to completion status. A `POST` request is sent via Axios and a `create()` method is called in order to create a new instance in the database. All of the saved books are presented in the `/saved` route.
* All of the books in the `/saved` route are organized according to their completion status: Reading, Plan To Read, and Completed. Selecting the ellipsis in this page allows the user to either move the book to another section or delete the saved book. Moving a book to a different section sends a `PUT` request to call the `update()` method to change the completion status. Removing a book sends a `DELETE` request with a `remove()` method instead. When the request is finished, a `GET` request under a `findAll()` method is sent to redisplay all the updated books.

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
