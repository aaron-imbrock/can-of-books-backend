'use strict';

const mongoose = require('mongoose');

require('dotenv').config();
mongoose.connect(process.env.DB_URL);

const Book = require('./models/book');

async function seed() {
    await Book.create({
        title: "The Call of the Wild is one of Jack London's most popular novels. The story follows a dog named Buck, a 140 pound Saint Bernard and Scotch Shepherd mix. Buck is abducted from a comfortable life as a pet and tossed into the chaos of the Klondike Gold Rush and the brutal realities of frontier life.",
        author: 'Jack London',
        description: 'A Story of a Dog owning his future',
        status: true,
    });

    console.log('Book1 was created...');

    await Book.create({
        title: 'Where the Red Fern Grows',
        author: 'Wilson Rawls',
        description: "Where the Red Fern Grows is the remarkable tale of a 10 year old boy named Billy Coleman who lives in the Ozark mountains with his family. Billy's dream is to purchase a redbone coonhound dog, and that's his ultimate goal. His family isn't wealthy so he has to save up the money himself.",
        status: true,
    });

    console.log('Book2 was created...');

    await Book.create({
        title: 'The Sea Wolf',
        author: 'Jack London',
        description: "The Sea Wolf is Jack London's powerful and gripping saga of Humphrey Van Weyden, captured by a seal-hunting ship and now an unwilling sailor under its dreaded captain, Wolf Larsen. The men who sailed with Larsen were treacherous outcasts, but the captain himself was the legendary Sea Wolf–a violent brute of a man.",
        status: true,
    });

    console.log('Book3 was created...');

    mongoose.disconnect();
}

seed();