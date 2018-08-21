const mongoose = require('mongoose');

const burgerSchema = mongoose.Schema({
	name: String,
	image: String
});

const Burgers = mongoose.model('Burgers', burgerSchema);

module.exports = Burgers;