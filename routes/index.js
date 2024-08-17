const express = require("express");
const router = express.Router();
const isLoggedIn = require("../middlewares/isLoggedIn");
const cookieParser = require("cookie-parser")
router.use(cookieParser());

router.get("/", function(req, res){
    let error = req.flash("error");
    res.render("index", { error });
});

//so who ever tries to acess the /ship router should be logged if not he will be reqirected to the login page b isLoggedIn functiokn
router.get("/shop", isLoggedIn, function(req,res){
    res.render("shop");
});


module.exports = router;
