'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');

const mongoose = require('mongoose');
// TODO: Build a Mongoose 'Book' schema with valid keys for `title`, `description`, and `status`. 
const Book = require('./models/book');
const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3002;

app.get('/test', (request, response) => {
  
  response.send('test request received')
  
})

app.listen(PORT, () => console.log(`listening on ${PORT}`));
mongoose.connect(process.env.DB_URL);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', function() {
  console.log('Mongoose is Connected');
});

app.get('/books', async (request, response, next) => {
  try {
    let allBooks = await Book.find({});
    response.status(200).send(allBooks);
  } catch (error) {
    next(error);
  }
});

app.post('/books', postBook);

async function postBook(request, response, next){
  // console.log(request.body);
  try {
    let bookData  = request.body;
    let createdBook = await Book.create(bookData);

    response.status(200).send(createdBook);
  } catch (error) {
    console.error(error);
    // next(error);
    // TODO: Create function that does error checking and supplies a status code.
    response.status(400).send('error creating book');
  }
}

app.get('*', (request, response) => {
  response.status(404).send('Not available');
});

// ERROR
app.use((error, request, response, next) => {
  console.log(error.message);
  response.status(500).send(error.message);
});