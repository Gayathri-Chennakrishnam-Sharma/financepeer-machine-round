const express = require('express');
const router = express.Router();
const fileuploadService = require('./fileupload.service');

// routes
router.post('/upload', upload);
router.get('/:id', getById);

module.exports = router;

function upload(req, res, next) {
    fileuploadService.create(req.body)
        .then(() => res.json({}))
        .catch(err => next(err));
}

function getById(req, res, next) {
    fileuploadService.getById(req.params.id)
        .then(file => file ? res.json(file) : res.sendStatus(404))
        .catch(err => next(err));
}