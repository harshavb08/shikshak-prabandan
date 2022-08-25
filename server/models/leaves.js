const mongoose = require("mongoose");

const leave = new mongoose.Schema({
    teacherId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "teacher",
        required: true
    },
    leaveName: {
        type: String,
        required: true
    },
    leaveDescription: {
        type: String,
        required: true
    },
    leaveLetter: {
        type: String,
        required: true
    },
    leaveStartDate: {
        type: Date,
        required: true
    },
    leaveEndDate: {
        type: Date,
        required: true
    }
});

const Leave = mongoose.model("leave", leaveSchema);
module.exports = leave;