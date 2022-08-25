const Teacher = require("../models/teacher");
const nodemailer = require("nodemailer");
const jwt = require("jsonwebtoken");
const otpGenerator = require("otp-generator");
const OTP = require("../models/emailOtp");

const loginController = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        // console.log(email, password);
        const teacher = await Teacher.findOne({ email });
        if (!teacher) {
            return res.status(202).json({
                success: false,
                message: "Teacher not found",
            });
        }
        if (teacher.password !== password) {
            return res.status(202).json({
                message: "Invalid credentials",
            });
        }
        // const token = jwt.sign({ _id: teacher._id }, process.env.JWT_SECRET, {
        //     expiresIn: "1h",
        // });
        const otp = otpGenerator.generate(6, {
            upperCaseAlphabets: false,
            specialChars: false,
            digits: true,
            lowerCaseAlphabets: false,
        });

        await OTP.deleteOne({ teacherEmail: email });

        const emailOtp = new OTP({
            teacherEmail: email,
            otp: otp,
        });
        await emailOtp.save();

        // console.log(otp);
        let transporter = nodemailer.createTransport({
            service: "Gmail",
            auth: {
                user: "shikshakprabandanorg@gmail.com",
                pass: "ndzjqhmopforejxc",
            },
        });
        let info = await transporter.sendMail({
            from: `"${process.env.GMAIL}"`,
            to: email,
            subject: "SignIn Confirmation",
            text: "Dont share this OTP to anyone!",
            html: `<h2>
                Enter the OPT to verify your account
            </h2>
            <p>
                <b>OTP:</b> ${otp}
            `,
        });
        // console.log("Message sent: %s", info);
        res.status(200).json({
            message: "OTP sent to your email",
            success: true,
            // token,
        });
    } catch (error) {
        console.log(error);
        res.json({
            message: "Error Logging In",
            success: false,
        });
    }
};

const resendOtp = async (req, res) => {
    try {
        const { email } = req.body;
        const otp = otpGenerator.generate(6, {
            upperCaseAlphabets: false,
            specialChars: false,
            digits: true,
            lowerCaseAlphabets: false,
        });
        await OTP.deleteOne({ teacherEmail: email });
        const emailOtp = new OTP({
            teacherEmail: email,
            otp: otp,
        });
        await emailOtp.save();
        let transporter = nodemailer.createTransport({
            service: "Gmail",
            auth: {
                user: "shikshakprabandanorg@gmail.com",
                pass: "ndzjqhmopforejxc",
            },
        });
        let info = await transporter.sendMail({
            from: `"${process.env.GMAIL}"`,
            to: email,
            subject: "SignIn Confirmation",
            text: "Dont share this OTP to anyone!",
            html: `<h2>
            Enter the OPT to verify your account
        </h2>
        <p>
            <b>OTP:</b> ${otp}
        `,
        });
        // console.log("Message sent: %s", info);
        res.status(200).json({
            message: "OTP sent to your email",
            success: true,
        });
    } catch (error) {
        console.log(error);
        res.json({
            message: "Error Logging In",
            success: false,
        });
    }
};

const verifyOTP = async (req, res, next) => {
    const { email, otp } = req.body;
    console.log(email, otp);
    const otpData = await OTP.findOne({ teacherEmail: email, otp: otp });
    if (!otpData) {
        return res.status(200).json({
            message: "OTP not found",
            success: false,
        });
    }
    await OTP.deleteOne({ teacherEmail: email });
    const token = jwt.sign(
        { _id: otpData.teacherEmail },
        process.env.JWT_SECRET_KEY,
        {
            expiresIn: "1h",
        }
    );
    return res.status(200).json({
        message: "OTP verified",
        success: true,
        token,
    });
};

const addTeacher = async (req, res, next) => {
    try {
        const addTeacher = await Teacher.create({
            teacherId: "186433",
            teacherName: "ramakishore",
            teacherSurname: "uppala",
            teacherDOB: "Aug 25 1990",
            teacherGender: "Male",
            fatherName: "Ajay",
            motherName: "Anjali",
            bloodGroup: "O+ve",
            aadharNumer: "500050646084",
            religion: "Hindus",
            address: "Flat no 206 durga vihar apparment",
            city: "pune",
            state: "maharastra",
            country: "india",
            pincode: "111045",
            phoneNumber: "9390571036",
            email: "rareone.kk@gmail.com",
            password: "sih2022",
            gender: "male",
            caste: "OBC",
            profilePicture: "abc.jpg",
            professionalDetails: {
                designation: "Teacher",
                subject: "Maths",
            },
            educationDetails: [
                {
                    nameOfBoard: "Board of Secondary Education",
                    nameOfSchool: "Jevan Shiksha Vidya Mandir",
                    medium: "English",
                    firstLanguage: "Marathi",
                    passed: "1991",
                    marksSecured: "545",
                    maxMarks: "600",
                    hallTicketNumber: "199160701",
                    cerficationNumner: "2345143",
                    certificateLocation: "234",
                    stream: "mpc",
                    branch: "na",
                    subject: "science",
                    methodologySubjct1: "hindi",
                    methodologySubject2: "english",
                },
            ],
            trainings: [
                {
                    startDate: Date.now(),
                    endDate: Date.now(),
                    nameOfTraining: "Computer Training",
                    description: "The training is to educ",
                    proofOfTraining: "abc.txt",
                },
            ],
            reasearch: {
                researchTitle: "Super",
                researchDescription: "adasd",
                researchLocation: "Hyd",
                researchDate: Date.now(),
                researchEndDate: Date.now(),
                ongoing: "false",
                researchProof: "asdasd",
            },
        });
        await addTeacher.save();
        res.status(200).json({
            message: "Teacher Added",
            success: true,
        });
    } catch (error) {
        console.log(error);
        res.json({
            message: "Error Adding Teacher",
            success: false,
        });
    }
};

const verifyTeacher = async (req, res, next) => {
    try {
        const { token } = req.body;
        // console.log(token);
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
        const teacher = await Teacher.findOne({ email: decoded._id });
        // console.log(decoded);
        if (!teacher) {
            return res.status(200).json({
                message: "Teacher not found",
                success: false,
            });
        }
        return res.status(200).json({
            message: "Teacher found",
            success: true,
            teacher,
        });
    } catch (error) {
        console.log(error);
        res.json({
            message: "Error Verifying Teacher",
            success: false,
        });
    }
};

module.exports = {
    loginController,
    verifyOTP,
    addTeacher,
    resendOtp,
    verifyTeacher,
};