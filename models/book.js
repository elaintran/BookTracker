const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    //some books don't have authors, so required is false
    //will write a method to convert unknown author to anonymous
    author: {
        type: String,
        required: false
    },
    synopsis: {
        type: String,
        required: false
    },
    data: {
        type: Date,
        default: Date.now
    }
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;