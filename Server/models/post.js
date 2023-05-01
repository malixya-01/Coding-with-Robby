const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    title: String,
    dis: String,
    price: Number,
    image: String
  
  });
  
  const Post = mongoose.model("Post", postSchema);

  module.exports = Post;