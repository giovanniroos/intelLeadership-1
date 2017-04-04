var mongoose = require('mongoose');

var feedbackSchema = mongoose.Schema({
    issue: String,
    description: String,
    status: String
});

module.exports = mongoose.model('feedback', feedbackSchema, 'feedback');