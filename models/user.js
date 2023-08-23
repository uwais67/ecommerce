const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  // ... other fields like name, email, etc.
});

const User = mongoose.model('User', userSchema);

module.exports = User;
