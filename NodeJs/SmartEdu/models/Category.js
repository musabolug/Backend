const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const slugify = require("slugify");
const CategoryShema = new Schema({
  name: {
    type: String,
    unique: true,
    required: true,
  },
  slug: {
    type: String,
    unique: true,
  },
  category:{
    type:mongoose.Schema.Types.ObjectId,
    ref: "Category"
  }
});

CategoryShema.pre("validate", function (next) {
  this.slug = slugify(this.name, {
    lower: true,
    strict: true,
  });
  next();
});

const Category = mongoose.model("Category", CategoryShema);
module.exports = Category;
