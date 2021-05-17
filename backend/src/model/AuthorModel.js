const mongoose = require('../config/database');
const Schema = mongoose.Schema;


const AuthorSchema = new Schema({
    name: {type: String, require: true},
    date: {type: Date, require: true},
    email: {type: String, require: true},
    category: {type: Number, require: true},
    created: {type: Date, default: Date.now()}
});

module.exports = mongoose.model('Author', AuthorSchema);