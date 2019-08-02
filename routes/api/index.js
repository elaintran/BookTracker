const router = require("express").Router();
const bookRoutes = require("./books");

//assign books.js as the route to "/books"
router.use("/books", bookRoutes);

module.exports = router;