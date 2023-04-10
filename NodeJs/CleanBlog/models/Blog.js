    const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//* Create Schema
const BlogSchema = new Schema({
  title: String,
  subtitle:String,
  description: String,
  image:String,
  creationDate: {
    type: Date,
    default: Date.now,
  },
});

const Blog = mongoose.model("Blog", BlogSchema);

module.exports = Blog;
