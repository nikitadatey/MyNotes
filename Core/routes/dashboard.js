const express = require('express');
const dashboardRouter = express.Router();
const Note = require('../models/note');
/* GET home page. */
dashboardRouter.get('/', function (req, res, next) {
    Note.find({})
        .then((notes) => {
            res.statusCode = 200;
            
            res.render('dashboard', { notes: notes });
        }, (err) => next(err))
        .catch((err) => next(err));
})

.post('/', function (req, res, next) {
    Note.create(req.body)
        .then((note) => {
            console.log('Note Is Created!', note)
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(note);
        }, (err) => next(err))
        .catch((err) => next(err))
})

module.exports = dashboardRouter;
