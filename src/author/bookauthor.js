const mongoose = require('mongoose');
const bookSchema= new mongoose.Schema({
    bookname:String,
    authorname:String,
    category: String,
    year: Number,
        

    
 }, {timestamps: true })


module.exports = mongoose.model('book', bookSchema) 

