const mongoose = require('../config/database');
const Schema = mongoose.Schema;


const AuthorSchema = new Schema({
    name: {type: String, required: true},
    age: {type: Number, required: true},
    email: {type: String, required: true},
});

module.exports = mongoose.model('Author', AuthorSchema);