const owner = require("../models/owner");


const ownerAuth = (req,res) => {
    const {email, password} = req.body;
    try{
        owner.findOne({email: email, password: password})
        .then((result) => {
            console.log(result);
            if(result){
                return res.status(200).send({
                    msg:'success'
                });
            }else{
                return res.status(400).send({
                    msg:'fail'
                });
            }
        }).catch((err) => {
            console.log(err);
            return res.status(500).send(err);
        });
    }
    catch(err){
        console.log(err);
        return res.status(500).send(err);
    }
}



module.exports = {
    ownerAuth
}