var express = require('express');
var router = express.Router();
var UserModel = require('../models/userModel.js');


//SCHEMES
//Get list of schemes
router.get('/userList', function(request, response) {
    UserModel.find({}, function(err, resources) {
        if (err) {
            response.send(err).status(404);
        } else {
            response.send(resources).status(200);
        }
    });
});

module.exports = router;