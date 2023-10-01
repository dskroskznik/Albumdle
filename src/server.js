const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000; // port 3000
const CONNECTION = process.env.CONNECTION;
const mongoose = require('mongoose');
const database = mongoose.connection;

const Album = require('./models/album');
const Games = require('./models/games');

mongoose.set('strictQuery', false);
// mongodb database connection string needed
mongoose.connect('mongodb://127.0.0.1:27017/', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'albumdle_db'
});

// console log database status
database.on('error', console.error.bind(console, 'MongoDB Connection Error!'));
database.once('open', () => {
    console.log('Connected to MongoDB!');
});

// run application port forward
app.get('/', (req, res) => {
    res.send('yo!');
});
app.listen(PORT, () => {
    console.log('Running server on port');
});