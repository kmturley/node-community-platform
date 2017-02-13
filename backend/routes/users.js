const express = require('express')
const router = express.Router()
const User = require('../models/user')

router.route('/users')
    .post((req, res) => {
        var user = new User();
        user.name = req.body.name;
        user.save((err, item) => {
            if (err) res.send(err)
            res.json(item)
        })
    })
    .get((req, res) => {
        User.find((err, items) => {
            if (err) res.send(err)
            res.json(items)
        })
    });

router.route('/users/:id')
    .get((req, res) => {
        User.findById(req.params.id, (err, item) => {
            if (err) res.send(err)
            res.json(item)
        })
    })
    .put((req, res) => {
        User.findById(req.params.id, (err, user) => {
            if (err) res.send(err)
            user.name = req.body.name
            user.save((err, item) => {
                if (err) res.send(err)
                res.json(item)
            })
        })
    })
    .delete((req, res) => {
        User.remove({
            _id: req.params.id
        }, (err, item) => {
            if (err) res.send(err)
            res.json(item)
        })
    })

module.exports = router