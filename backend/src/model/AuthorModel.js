const mongoose = require('../config/database');
const Schema = mongoose.Schema;


const AuthorSchema = new Schema({
    name: {type: String, require: true},
    age: {type: Number, require: true},
    email: {type: String, require: true},
    category: {type: Number, require: true},
});

module.exports = mongoose.model('Author', AuthorSchema);