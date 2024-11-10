const express = require('express');
const path = require('path');
const http = require('http');
const scoresController = require('./controllers/scoresController');

const app = express();
const server = http.createServer(app);

const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from the React app build
app.use(express.static(path.join(__dirname, '../dist')));

// Serve images from the assets folder
app.use('/assets', express.static(path.join(__dirname, 'assets')));

// Temporary Routes for handling Score
app.post('/api/scores', scoresController.uploadScore);
app.get('/api/scores/leaderboard', scoresController.getTopScores);

// Catch-all route to serve index.html for any other requests
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist', 'index.html'));
});

// Global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error: ' + err,
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.error(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

// Start server
server.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});

module.exports = app;
