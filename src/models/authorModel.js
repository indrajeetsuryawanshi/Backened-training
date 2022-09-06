const mongoose = require('mongoose');

const authorSchema = new mongoose.Schema({

    fname: {
        type: String,
        required: true
    },
    lname: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true,
        enum: ["Mr", "Mrs", "Miss"]
    },
    email: {
        type: String,
        required: true,
        unique : true
    },
    password: {
        type: String,
        required: true
    }
}, { timestamps: true }

);

<<<<<<< HEAD
module.exports= mongoose.model('P-Author', authorSchema);
=======
module.exports.authorSchema = mongoose.model('P-Author', authorSchema);
>>>>>>> 3df1280239701270ada4cb50ea8e4a41325bb9b3

