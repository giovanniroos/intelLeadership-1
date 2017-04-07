var mongoose = require('mongoose');

var surveySchema = mongoose.Schema({
    experienceRating: String,
    conceptRating: String,
    goodJobRating: String,
    comments: String
});

module.exports = mongoose.model('survey', surveySchema, 'survey');