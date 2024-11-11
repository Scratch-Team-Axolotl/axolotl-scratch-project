const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
require('dotenv').config();
const http = require('http');

const apiRouter = require('./routes/api');
const app = express();
const server = http.createServer(app);

const PORT = 8080;

mongoose
  .connect(process.env.MONGO_URI, {
    // options for the connect method to parse the URI
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // sets the name of the DB that our collections are part of
    dbName: 'ai_detect',
  })
  .then(() => console.log('Connected to Mongo DB.'))
  .catch((err) => console.log(err));

// CORS stuff
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200);
  }
  next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Debug middleware
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`, 'Body:', req.body);
  next();
});

// Mount API routes
app.use('/api', apiRouter);

// // Verify authentication for /level1
// app.get('/api/check-auth', sessionController.isLoggedIn, (req, res) => {
//   return res.status(200).json({ authenticated: true });
// });

// Static file serving
app.use(express.static(path.join(__dirname, '../dist')));

// Catch-all route handler
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist', 'index.html'));
});

// Global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { error: 'An error occurred' },
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
