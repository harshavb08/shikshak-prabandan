const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const promotionSchema = new mongoose.Schema({
    teacherId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "teacher",
        required: true
    },
    promotionName: {
        type: String,
        required: true
    },
    promotionDescription: {
        type: String,
        required: true
    },
    promotionLetter: {
        type: String,
        required: true
    },
    previousPosition: {
        type: String,
        required: true
    },
    previousSchool: {
        type: String,
        required: true
    },
    newPosition: {
        type: String,
        required: true
    },
    newSchool: {
        type: String,
        required: true
    },
    previousSalary: {
        type: String,
        required: true
    },
    newSalary: {
        type: String,
        required: true
    },
});

const promotion = mongoose.model("teacher", promotionSchema);
module.exports = promotion;