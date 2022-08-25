const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const punishmentSchema = new mongoose.Schema({
    teacherId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "teacher",
        required: true
    },
    // schoolName: {
    //     type:
    // },
    punishmentName: {
        type: String,
        required: true
    },
    punishmentDescription: {
        type: String,
        required: true
    },
    punishmentLetter: {
        type: String,
        required: true
    },
});

const punishment = mongoose.model("punishment", punishmentSchema);
module.exports = punishment;