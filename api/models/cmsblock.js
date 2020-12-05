const mongoose = require('mongoose');

var Schema = mongoose.Schema;

var CMSBlockSchema = new Schema({
  created_at: {
    type: Date,
    default: Date.now
  },
  type: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  lang: {
    type: String,
    required: true
  },
  content: {
    type: Schema.Types.Mixed,
    required: true
  }
});

// Compile model from schema
var CMSBlock = mongoose.model('Cmsblock', CMSBlockSchema);

module.exports = CMSBlock;
