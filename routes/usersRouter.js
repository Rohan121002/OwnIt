const express = require("express");
const router = express.Router();
const { registerUser , loginUser, logoutUser } = require("../controllers/authController");



router.get("/", function(req, res){
    res.send("hey its working");
})

//Mongo db is schema less db so if any field is not provided it will still create the user without problem 
//Check out JOY
router.post("/register", registerUser);

router.post("/login", loginUser);

router.get("/logout", logoutUser);

module.exports = router;