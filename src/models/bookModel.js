const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {
    name:"Two states",
    author_id:1,
    price:50,
    ratings:4.5,
} ,

    
{ timestamps: true });


module.exports = mongoose.model('Book', bookSchema) //books

