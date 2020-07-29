const { check } = require('express-validator');

exports.todoValidator = [
    check('name')
        .not()
        .isEmpty()
        .withMessage('Name is required'),
];