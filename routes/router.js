var router = require('express').Router();
const Controller = require('../api/controllers/TodoController');
const {
    runValidation
} = require('../validators');
const {
    todoValidator,
} = require('../validators/todo');
//
router.post('/create', todoValidator,runValidation, function(req, res, next) {
    Controller.create(req, res, next)
});
router.post('/findOne', function(req, res, next) {
    Controller.findOne(req, res, next)
});
router.post('/update', todoValidator,runValidation, function(req, res, next) {
    Controller.update(req, res, next)
});
router.post('/remove', function(req, res, next) {
    Controller.remove(req, res, next)
});
router.get('/', function(req, res, next) {
    Controller.getall(req, res, next)
});

module.exports = router;