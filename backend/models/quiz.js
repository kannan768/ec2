// backend/models/user.js
const mongoose = require('mongoose');

const quizschema = new mongoose.Schema({
    id:String,
    subject:String,
    question: String,
    options: [String],
    correctanswer: String,
    
});

const quiz = mongoose.model('quiz', quizschema);

module.exports = quiz;
