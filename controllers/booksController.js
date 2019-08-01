const db = require("../models");

module.exports = {
    //find and display all books
    findAll: function(req, res) {
        db.Book
            .find(req.query).sort({date: -1})
            .then(data => res.json(data))
            .catch(err => res.status(422).json(err));
    }
}