const mongoose = require('mongoose');

var Schema = mongoose.Schema;

var AdminSchema = new Schema({
  date: Date,
  name: String,
  surname: String,
  email: String,
  username: String,
  password: String
});

var Admin = mongoose.model('Admin', AdminSchema);

module.exports = Admin;
