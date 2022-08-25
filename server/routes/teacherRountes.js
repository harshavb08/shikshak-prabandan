const express = require("express");

const router = new express.Router();

const teacherController = require("../controllers/teacherController");
router.post("/teacherLogin", teacherController.loginController);
router.post("/addTeacher", teacherController.addTeacher);
router.post("/verifyOTP", teacherController.verifyOTP);
router.post("/resendOtp", teacherController.resendOtp);
router.post("/verifyTeacher", teacherController.verifyTeacher);
router.post("/editDetails", teacherController.editDetails);
module.exports = router;
