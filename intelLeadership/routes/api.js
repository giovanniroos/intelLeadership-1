var express = require('express');
var router = express.Router();
var UserModel = require('../models/userModel.js');
var FeedbackModel = require('../models/feedbackModel.js');
var SurveykModel = require('../models/surveyModel.js');

//USERS
//Get list of users
router.get('/userList', function(request, response) {
    UserModel.find({}, function(err, resources) {
        if (err) {
            response.send(err).status(404);
        } else {
            response.send(resources).status(200);
        }
    });
});

//Get one user
router.get('/user/:id', function(request, response) {
    var id = request.params.id;
    UserModel.findOne({_id: id}, function(err, resources) {
        if (err) {
            response.send(err).status(404);
        } else {
            response.send(resources).status(200);
        }
    });
});

//Update user
router.post('/user/save', function(request, response) {
    UserModel.findOne({ _id: request.body.userSelected._id }, function(err, claim){
        claim._id = request.body.userSelected._id;
        claim.userName = request.body.userSelected.userName;
        claim.barCode = request.body.barcode;
        claim.save(function(err, resource) {
            console.log('API saving user');
         if (err) {
                return response.send(err);
            } else {
                return response.json({ message: 'User updated!' });
            }
        });
    });
})


//FEEDBACK
//Get list of feedback
router.get('/feedbackList', function(request, response) {
    FeedbackModel.find({}, function(err, resources) {
        if (err) {
            response.send(err).status(404);
        } else {
            response.send(resources).status(200);
        }
    });
});

//Save feedback details
router.post('/feedback/save', function(request, response) {
    var feedbackModel = new FeedbackModel(request.body);
    feedbackModel.save(function(err, resource) {
        if (err) {
            response.send(err).status(501);
        } else {
            response.json(resource).status(201);
        }
    });
})


//SURVEY
//Save survey
router.post('/survey/save', function(request, response) {
    var model = new SurveykModel(request.body);
    model.save(function(err, resource) {
        if (err) {
            response.send(err).status(501);
        } else {
            response.json(resource).status(201);
        }
    });
})
module.exports = router;