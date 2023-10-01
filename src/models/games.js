//models/games
const mongoose = require('mongoose');

const gameSessionModel = new mongoose.Schema({
    album: {
        type: mongoose.SchemaTypes.ObjectId,
        required: true
    },
    guesses: [
        {
            guess: [String],
            correct: Boolean,
            timestamp: Date,

        },
    ],
    score: Number,
    //duration: TimeRanges,
});

module.exports = mongoose.model('GameSession', gameSessionModel);