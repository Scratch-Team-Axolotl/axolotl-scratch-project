const mongoose = require('mongoose');

const MONGO_URI =
  'mongodb+srv://wfnwfnwfnwfn:65bQwBw5kFTSUgYC@cluster0.9z2sw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

mongoose
  .connect(MONGO_URI, {
    // options for the connect method to parse the URI
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // sets the name of the DB that our collections are part of
    dbName: 'ai_detect',
  })
  .then(() => console.log('Connected to Mongo DB.'))
  .catch((err) => console.log(err));

const playersSchema = new mongoose.Schema({
  player_name: String,
  score: Number,
  lastPlayed: { type: Date, default: Date.now },
});

const Players = mongoose.model('player', playersSchema);

module.exports = {
  Players,
};
