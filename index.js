const express = require('express');
const parser = require('body-parser');
const notesController = require('./controllers/notes');
const usersController = require('./controllers/users');

// instantiate express
const app = express();

// interprets key value pairs in URLs
app.use(parser.urlencoded({ extended: true }));

// converts a json string to the an object and attaches it to req.body
app.use(parser.json());

app.get('/', (req, res) => {
	res.redirect('/notes');
});

app.use('/notes', notesController);
app.use('/users', usersController);

app.listen(3000, () => console.log('app is running'));

// DO NOT REMOVE THIS LINE:
module.exports = app;
