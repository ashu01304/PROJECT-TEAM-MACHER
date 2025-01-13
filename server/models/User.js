const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  institution: String,
  bio: String,
  skills: [{ type: String }],
  isAvailable: { type: Boolean, default: true }
});

module.exports = mongoose.model('User', userSchema);
