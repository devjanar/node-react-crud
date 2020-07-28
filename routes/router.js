var router = require('express').Router();
const Controller = require('../api/TodoController');

//
router.post('/create', function(req, res, next) {
    Controller.create(req, res, next)
});
router.post('/findOne', function(req, res, next) {
    Controller.findOne(req, res, next)
});
router.post('/update', function(req, res, next) {
    Controller.update(req, res, next)
});
router.post('/remove', function(req, res, next) {
    Controller.remove(req, res, next)
});
router.get('/', function(req, res, next) {
    Controller.getall(req, res, next)
});

module.exports = router;