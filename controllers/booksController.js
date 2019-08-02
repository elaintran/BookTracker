const db = require("../models");

module.exports = {
    //find and display all books
    findAll: (req, res) => {
        db.Book
            .find(req.query).sort({date: -1})
            .then(data => res.json(data))
            .catch(err => res.status(422).json(err));
    },
    create: (req, res) => {
        // console.log(req.body.title);
        db.Book.create({title: req.body.title})
            .then(data => res.json(data))
            .catch(err => res.status(422).json(err));
    }
}