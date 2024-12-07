const mongoose = require('mongoose');

const personSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  age: {
    type: Number,
    required: true,
    min: 0
  },
  gender: {
    type: String,
    required: true,
    enum: ['Male', 'Female', 'Other']
  },
  mobileNumber: {
    type: String,
    required: true,
    match: /^[0-9]{10}$/
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Person', personSchema);