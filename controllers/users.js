const express = require('express');
const router = express.Router();

//import models
const User = require('../models/User');
const Note = require('../models/Note');

router.get('/', (req, res) => {
	User.find().then(allUsers => {
		res.json(allUsers);
	});
});

router.get('/:id', (req, res) => {
	User.findOne({ _id: req.params.id }).then(user => {
		res.json(user);
	});
});

module.exports = router;
