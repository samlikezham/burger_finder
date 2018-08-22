const mongoose = require('mongoose');
const Post = require('/posts.js')
const Schema = mongoose.Schema;

const userSchema = Schema({
  username: String,
  password: String,
  posts: [postSchema]
});

const User = mongoose.model('User', userSchema);

module.exports = User;
