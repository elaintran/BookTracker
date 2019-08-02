const router = require("express").Router();
const booksController = require("../../controllers/booksController.js");

router.route("/")
    .get(booksController.findAll)
    .post(booksController.create);

// router.route("/id")

module.exports = router;