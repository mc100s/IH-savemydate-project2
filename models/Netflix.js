const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const netflixSchema = new Schema({
  title: String,
  year: String,
  director: String,
  duration: String,
  genre: String,
  rate: String    
  },
 {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const Netflix = mongoose.model('Cinema', netflixSchema);
module.exports = Netflix;