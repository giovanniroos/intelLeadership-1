var mongoose = require('mongoose');

var userDetailsSchema = mongoose.Schema({

        id: String,
        userName : String,
        barCode: String
    
});

module.exports = mongoose.model('users', userDetailsSchema, 'users');
