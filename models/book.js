const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    //some books don't have authors, so required is false
    //will write a method to convert unknown author to anonymous
    authors: [{
        type: String,
        required: false
    }],
    description: {
        type: String,
        required: false
    },
    rating: {
        type: Number,
        required: false
    },
    //need a placeholder image
    image: {
        type: String,
        required: false
    },
    link: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;