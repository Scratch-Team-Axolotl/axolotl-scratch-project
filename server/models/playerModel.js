const mongoose = require('mongoose');

const playerSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  score: { type: Number, default: 0 },
  lastPlayed: { type: Date, default: Date.now },
});

playerSchema.index({ username: 1 }, { unique: true });

module.exports = mongoose.model('Player', playerSchema);
