const mongoose = require('mongoose');

const ObjectId = mongoose.Schema.Types.ObjectId

const blogsSchema = new blogsSchema.mongoose({

    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    authorId: {
        type: ObjectId,
        required: true,
        ref: "P-Author"
    },
    tags: [String],
    category: {
        type: String,
        required: true
    },
    subcategory: [String],
    isDeleted: {
        type: Boolean,
        default: false
    },
    isPublished: {
        type: Boolean,
        default: false
    }
},

    {
        timestamps: true
    }

)

module.exports.blogsSchema = mongoose.model('P-Blogs', 'blogsSchema')