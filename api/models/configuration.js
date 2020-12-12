const mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ConfigurationSchema = new Schema({
  created_at: {
    type: Date,
    default: Date.now
  },
  title: {
    type: String,
    required: true
  },
  lang: {
    type: String,
    required: true
  },
  settings: {
    type: Schema.Types.Mixed,
    required: true
  }
});

var Configuration = mongoose.model('Configuration', ConfigurationSchema);

module.exports = Configuration;
