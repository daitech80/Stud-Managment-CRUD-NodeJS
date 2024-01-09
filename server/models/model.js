const mongoose = require('mongoose')

var schema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    age: {
        type: String,
        require: true,
    },
    grade: {
        type: String,
        require: true,

    },
    gender: {
        type: String,
        require: true,

    },
       
    status: {
        type: String,
        require: true,

    },
 date: {
            type: Date,
            default: Date.now
        },
})

const Stud = mongoose.model('stud', schema);
module.exports = Stud