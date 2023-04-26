'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');

const mongoose = require('mongoose');
// TODO: Build a Mongoose 'Book' schema with valid keys for `title`, `description`, and `status`. 
const Book = require('./models/book');
const e = require('express');
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

app.delete('/books/:id', deleteBook);
async function deleteBook (request, response){
  try {
    let id = request.params.id;
    console.log(id);
    let deletedBook = await Book.findByIdAndDelete(id);
    
    response.status(200).send(`${id} deleted`);
  } catch (error) {

    console.error(error);
    response.status(500).send(`Error deleting ${id}`);

  }
}

// *** UPDATE
app.put('/books/:id', updateBook);
async function updateBook (request, response, next) {
  let id = request.params.id;
  try {
    // TODO: Grab the id from the request.parmas and data from the request.body
    let bookData = request.body;
    // TODO: use the Model method of fineByIdAndUpdate and pass in the id, data, options obj
    // ! 3 args
    // ! id, data, options object -> { new: true, overwrite: true}
    const updateOptions = { new: true, overwrite: true };
    let updatedBook = await Book.findByIdAndUpdate(id, bookData, updateOptions );
    response.status(200).send(updatedBook);
  } catch (error) {
    console.error(error);
    response.status(500).send(`Error updating ${id}`);
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