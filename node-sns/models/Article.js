const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const articleSchema = new Schema({
    _id: Number,
    title: String,
    author: Number,
    body: String,
    likes: Number,
    tags: [{type: String}],
    createAt: {
        type: Date,
        default: Date.now
    }
}, {_id: false});

module.exports = mongoose.Model('Article', articleSchema);