const mongoose = require('mongoose');

var Schema = mongoose.Schema;

var SessionSchema = new Schema({
  date: Date,
  name: String,
  surname: String,
  mobile: String,
  email: String,
  status: {
    type: String,
    enum : ['pending','approved', 'cancelled'],
    default: 'pending'
  }
});

// Compile model from schema
var Session = mongoose.model('Session', SessionSchema);

module.exports = Session;
