var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Todo = new Schema({

    name:{
        type: String,
        trim: true
    },
    description:{
        type: String,
        trim: true
    },

},{timestamps: true, versionKey: false});


module.exports = mongoose.model('Todo', Todo);