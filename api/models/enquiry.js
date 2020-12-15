const mongoose = require('mongoose');

var Schema = mongoose.Schema;

var EnquirySchema = new Schema({
  created_at: {
    type: Date,
    default: Date.now
  },
  name: {
    type: String,
    required: true
  },
  surname: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  topic: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  }
});

// Compile model from schema
var Enquiry = mongoose.model('Enquiry', EnquirySchema);

module.exports = Enquiry;
