const school = require("../models/school");
const owner = require("../models/owner");
const shortid = require('shortid');

const addSchool = (req, res) => {
    console.log(req.body);
    console.log(req.files);
    const school_docs_file = req.files.school_docs;
    const { username, email, password, school_code, school_name, type_of_school, no_of_posts, no_of_teachers, school_docs } = req.body;
    owner.findOne({
        email: req.body.ownerEmail,
        password: req.body.ownerPassword
    }).then((result) => {
        if (result) {
            school.findOne({
                username: username
            }).then((result) => {
                if (result) {
                    return res.status(400).send({
                        msg: 'School already exists'
                    });
                } else {
                    let school_docs_filename = shortid.generate() + ".pdf";
                    school_docs_file.mv("./school_docs/" + school_docs_filename, (err) => {
                        if (err) {
                            console.log(err);
                            return res.status(500).send(err);
                        }
                        const newSchool = new school({
                            username: username,
                            email: email,
                            password: password,
                            school_code: school_code,
                            school_name: school_name,
                            type_of_school: type_of_school,
                            no_of_posts: no_of_posts,
                            no_of_teachers: no_of_teachers,
                            school_docs: school_docs_filename
                        });
                        newSchool.save()
                            .then((result) => {
                                console.log(result);
                                return res.status(200).send({
                                    msg: 'success'
                                });
                            }).catch((err) => {
                                console.log(err);
                                return res.status(500).send(err);
                            });
                    });
                }
            }).catch((err) => {
                console.log(err);
                return res.status(500).send(err);
            });
        }
    }).catch((err) => {
        console.log(err);
        return res.status(500).send(err);
    });
}

const getAllSchools = (req, res) => {
    owner.findOne({
        email: req.body.ownerEmail,
        password: req.body.ownerPassword
    }).then((result) => {
        if (result) {
            school.find()
                .then((result) => {
                    console.log(result);
                    return res.status(200).send(result);
                }).catch((err) => {
                    console.log(err);
                    return res.status(500).send(err);
                });
        } else {
            return res.status(400).send({
                msg: 'fail'
            });
        }
    }).catch((err) => {
        console.log(err);
        return res.status(500).send(err);
    });
}

const deleteAllSchools = (req, res) => {
    owner.findOne({
        email: req.body.ownerEmail,
        password: req.body.ownerPassword
    }).then((result) => {
        const school_codes = req.body.school_codes;
        console.log(school_codes);
        for (let i = 0; i < school_codes.length; i++) {
            school.findOneAndDelete({
                username: school_codes[i]
            }).then((result) => {
                console.log(result);
            }).catch((err) => {
                console.log(err);
                return res.status(500).send(err);
            });
        }
        return res.status(200).send({
            msg: 'success'
        });
    }).catch((err) => {
        console.log(err);
        return res.status(500).send(err);
    });
}

const editSchool = (req, res) => {
    console.log(req.body);
    console.log(req.files);
    const { username, email, password, school_code, school_name, type_of_school, no_of_posts, no_of_teachers, school_docs } = req.body;
    owner.findOne({
        email: req.body.ownerEmail,
        password: req.body.ownerPassword
    }).then((result) => {
        if (result) {
            school.updateOne({
                username: username
            },{
                email: email,
                password: password,
                school_code: school_code,
                school_name: school_name,
                type_of_school: type_of_school,
                no_of_posts: no_of_posts,
                no_of_teachers: no_of_teachers,
                username:username
            }).then((result) => {
                if(school_docs!=='null'){
                    const school_docs_file = req.files.school_docs;
                    let school_docs_filename = shortid.generate() + ".pdf";
                    school_docs_file.mv("./school_docs/" + school_docs_filename, (err) => {
                        if (err) {
                            console.log(err);
                            return res.status(500).send(err);
                        }
                        school.updateOne({
                            username: username
                        },{
                            school_docs: school_docs_filename
                        }).then((result) => {
                            console.log(result);
                            return res.status(200).send({
                                msg: 'success'
                            });
                        }).catch((err) => {
                            console.log(err);
                            return res.status(500).send(err);
                        });
                    });
                }
            }).catch((err) => {
                console.log(err);
                return res.status(500).send(err);
            });
        }
    }).catch((err) => {
        console.log(err);
        return res.status(500).send(err);
    });

}

module.exports = {
    addSchool,
    getAllSchools,
    deleteAllSchools,
    editSchool
}