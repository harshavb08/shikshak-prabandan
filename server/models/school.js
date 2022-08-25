const mongoose = require('mongoose');

const schoolSchema = new mongoose.Schema({
    username:{
        type: String,
        unique: true,
        required: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
    },
    password: {
        type:String,
        required: true,
    },
    school_code :{
        type: String,
        required: true,
    },
    school_name :{
        type: String,
        required: true,
    },
    type_of_school:{
        type: String,
        required: true,
    },
    no_of_posts: {
        type: Number,
        required: true,
    },
    no_of_teachers: {
        type: Number,
        required: true,
    },
    school_docs:{
        type: String,
        required: true,
    }
});

const school = mongoose.model('School', schoolSchema);

module.exports = school;