const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const teacherSchema = new mongoose.Schema({
    teacherId: { type: String, required: true },
    teacherName: {
        type: String,
        required: true,
    },
    teacherSurname: { type: String, required: true },
    teacherDOB: { type: Date, required: true },
    fatherName: { type: String, required: true },
    motherName: { type: String, required: true },
    bloodGroup: { type: String, required: true },
    aadharNumer: { type: String, required: true },
    religion: { type: String, required: true },
    address: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    country: { type: String, required: true },
    pincode: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    gender: { type: String, required: true },
    caste: { type: String, required: true },
    profilePicture: { type: String, required: true },
    professionalDetails: {
        designation: { type: String, required: true },
        subject: { type: String, required: true },
    },
    martialStatus: { type: String, required: true },
    educationDetails: [
        {
            nameOfBoard: { type: String, required: true },
            nameOfSchool: { type: String, required: true },
            medium: { type: String, required: true },
            firstLanguage: { type: String },
            passed: { type: Date, required: true },
            marksSecured: { type: String, required: true },
            maxMarks: { type: String, required: true },
            hallTicketNumber: { type: String, required: true },
            cerficationNumner: { type: String, required: true },
            certificateLocation: { type: String, required: true },
            stream: { type: String },
            branch: { type: String },
            subject: { type: String },
            methodologySubject1: { type: String },
            methodologySubject2: { type: String },
            title: { type: String, required: true },
            courseName: { type: String, required: true },
        },
    ],
    trainings: [
        {
            startDate: { type: Date, required: true },
            endDate: { type: Date, required: true },
            nameOfTraining: { type: String, required: true },
            description: { type: String, required: true },
            proofOfTraining: { type: String, required: true },
        },
    ],
    reasearch: {
        researchTitle: { type: String, required: true },
        researchDescription: { type: String, required: true },
        researchLocation: { type: String, required: true },
        researchDate: { type: Date, required: true },
        researchEndDate: { type: Date, required: true },
        ongoing: { type: Boolean, required: true },
        researchProof: { type: String, required: true },
    },
    createdAt: { type: Date, default: Date.now },
});

const teacher = mongoose.model("teacher", teacherSchema);
module.exports = teacher;