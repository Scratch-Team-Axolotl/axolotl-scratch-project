const mongoose = require('mongoose');
require('dotenv').config();

const sessionSchema = new mongoose.Schema({
  cookieId: { type: String, required: true, unique: true },
  createdAt: {
    type: Date,
    expires: process.env.SESSION_DURATION_SECONDS,
    default: Date.now,
  },
});

module.exports = mongoose.model('Session', sessionSchema);
