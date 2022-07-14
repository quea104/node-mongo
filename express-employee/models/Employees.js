// import mongoose from 'mongoose'; // ES6(ES2015) 추가된 모듈 사용 방법
const mongoose = require('mongoose');
const { Schema } = mongoose;

const employeeSchema = new Schema({
    id: {
        type: Number,
        require: true,
        unique: true
    },
    name: {
        type: String,
        require: true,
        default: 'noname'
    }, // String is shorthand for {type: String}
    addr: {
        city: {
            type: String,
            require: true,
        },
        detail: String
    },
    position: String,
    date: { 
        type: Date, 
        default: Date.now 
    },
    hidden: Boolean
});

module.exports = mongoose.model('Employee', employeeSchema);
