const router = require("express").Router();
const booksController = require("../controllers/booksController.js");

module.exports = function(app) {
    router.route("/api/books")
        .get(booksController.findAll)
        .post(booksController.create);
};