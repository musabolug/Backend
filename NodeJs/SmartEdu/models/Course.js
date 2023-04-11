const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const slugify = require("slugify")
const CourseShema = new Schema({
  name: {
    type: String,
    unique: true,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  slug: {
    type: String,
    unique: true,
  }
});

CourseShema.pre("validate", function(next){
  this.slug = slugify(this.name,{
    lower: true,
    strict:true
  })
  next()
})

const Course = mongoose.model("Course", CourseShema);
module.exports = Course;
