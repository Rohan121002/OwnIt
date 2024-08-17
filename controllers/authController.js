const userModel = require("../models/user-model");
const bcrypt = require("bcrypt");
const { generateToken } = require("../utils/generateToken");

module.exports.registerUser = async function(req, res){
    try{
        //Do joy based valideation in this
        let {email , password , fullName} = req.body;
        let user = await userModel.findOne({email:email});
        if(user){
            req.flash("error", "You already have an account, Please login");
            return res.redirect("/")
        }
        bcrypt.genSalt(10, function(err, salt){
            bcrypt.hash(password, salt, 
                async function(err, hash){
                    if(err) {
                        req.flash("error", err.message)
                        return res.redirect("/");
                    }
                    else{
                        let user = await userModel.create({
                            email,
                            password:hash,
                            fullName,
                        });
                        let token = generateToken(user);
                        res.cookie("token",token);
                        // res.flash("erro""User created Successfully")
                        return res.redirect("/shop")
                    }
                }
            )
        })

    }catch(err){
        res.send(err.message);
    }

}

module.exports.loginUser = async function(req, res){
    let {email , password} = req.body;
    let user = await userModel.findOne({email:email});
    if(!user){
        req.flash("error", "Email or password incorrect");
        return res.redirect("/")
    }
    bcrypt.compare(password, user.password, 
        function(err, result){
            if(result){
                let token = generateToken(user);
                res.cookie("token",token);
                return res.redirect("/shop");
            }else{
                req.flash("error", "Email or password incorrect");
                return res.redirect("/")
            }
    });

}

module.exports.logoutUser = function(req, res){
    res.cookie("token", "");
    res.redirect("/");
}