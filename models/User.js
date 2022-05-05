const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
  },
  name: {
    type: String,
  },
  img: {
    type: String,
  },
});

module.exports = mongoose.model("User", UserSchema);
