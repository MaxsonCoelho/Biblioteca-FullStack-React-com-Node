const mongoose = require('../config/database');
const Schema = mongoose.Schema;


const BooksSchema = new Schema({
    title: {type: String, required: true},
    description: {type: String, required: true},
    type: {type: String, required: true},
    image: {type: Object},
    author: [{ type: Schema.Types.ObjectId, ref: 'Author' }]
});

module.exports = mongoose.model('Books', BooksSchema);