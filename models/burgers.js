const mongoose = require('mongoose');

const burgerSchema = new mongoose.Schema({
	name: String,
	image: String,
	description: String,
	// make comments an array with comment ID's to reference
	comments: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: "Comment"
		}
	]
});

const Burgers = mongoose.model('Burgers', burgerSchema);

module.exports = Burgers;