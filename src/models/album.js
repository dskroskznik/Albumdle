//models/album
const mongoose = require('mongoose');

const albumModel = new mongoose.Schema({
    artist: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    releaseDate: {
        type: Date,
        required: true,
    },
    coverURL: {
        type: String,
        required: true,
    },
    number: Number,
    genre: [String],    
});

module.exports = mongoose.model('Album', albumModel);