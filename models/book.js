'use strict';

const mongoose = require('mongoose');

const { Schema } = mongoose;

const bookSchema = new Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    description: { type: String, required: true },
    url: { type: String, required: true },
    status: { type: Boolean, required: true },
});

const Book = mongoose.model('book', bookSchema);
// console.log("book.js - " + Book);

module.exports = Book;