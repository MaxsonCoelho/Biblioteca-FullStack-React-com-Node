const mongoose = require('../config/database');
const Schema = mongoose.Schema;


const BooksSchema = new Schema({
    title: {type: String, require: true},
    description: {type: String, require: true},
    type: {type: String, required: true},
    image: {type: Object, require: false},
    author: [{ type: Schema.Types.ObjectId, ref: 'Author', require: true }]
});

module.exports = mongoose.model('Books', BooksSchema);