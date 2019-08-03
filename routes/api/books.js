const router = require("express").Router();
const booksController = require("../../controllers/booksController.js");

//the route in the api folder is set to "/api" while books.js is set to "/books"

//route to "/api/books"
router.route("/")
    .get(booksController.findAll)
    .post(booksController.create);

//route to "/api/books/:id"
router.route("/:id")
    .put(booksController.update)
    .delete(booksController.remove);

module.exports = router;