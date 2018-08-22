const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = Schema({
  title: String,
  content: String
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
