const express = require("express");
const router = express.Router();
const ownerModel = require("../models/owner-model");

// This is only for development its stored in memory this NODE_ENV so no one can change it
if(process.env.NODE_ENV === "development"){
    router.post("/create", async function(req, res){
        let owners = await ownerModel.find();
        if(owners.length>0){
            return res.status(503).send(owners);
        }

        let {fullName , email , password} = req.body;

        let createdOwner = await ownerModel.create({
            fullName,
            email,
            password,
        })
        res.status(201).send(createdOwner);
    })
}
//This is stored in memory directly so no worry
// console.log(process.env.NODE_ENV);
router.get("/admin", function(req, res){
    res.render("createproducts")
})


module.exports = router;