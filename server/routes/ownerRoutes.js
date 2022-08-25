const express = require('express');

const router = express.Router();

const ownerController = require("../controllers/ownerController");

const schoolController = require("../controllers/schoolControllers");
const school = require('../models/school');

router.post("/ownerAuth",ownerController.ownerAuth);

router.post("/addSchool",schoolController.addSchool);

router.post("/getAllSchools",schoolController.getAllSchools);

router.post("/deleteSchools",schoolController.deleteAllSchools);

router.post("/editSchool",schoolController.editSchool);

module.exports = router;