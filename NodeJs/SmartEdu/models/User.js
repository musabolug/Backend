const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const Schema = mongoose.Schema;

const UserShema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role:{
    type : String,
    enum:["student","teacher","admin"],
    default: "student"
  },
  courses:[{
    type: mongoose.Schema.Types.ObjectId,
    ref:"Course"
  }]
});

UserShema.pre("save", function (next) {
  const user = this;
  bcrypt.hash(user.password, 10, (err, hash) => {
    user.password = hash;
    next()
  });
});

const User = mongoose.model("User", UserShema);
module.exports = User;
