var mongoose = require('mongoose');

var userDetailsSchema = mongoose.Schema({

    users : {
        userName : String
    }
});

module.exports = mongoose.model('users', userDetailsSchema, "users");
