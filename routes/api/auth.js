var express     = require("express"),
    mongoose    = require("mongoose");
    bcrypt      = require("bcryptjs");
    config      = require("config");
    jwt         = require("jsonwebtoken");

var User = require("../../models/User");

var KEYS    = require("../../config/keys.js");
var config  = require("config");

var router = express.Router();


// @route   GET api/auth/
// @desc    VALIDATES A USER AND SENDS TOKEN DURING REGISTRATION AND LOGIN
// @access  PUBLIC
router.post("/login", (req, res) => {

    const {username, password} = req.body;
    if(!username || !password) res.status(400).json({mssg: "Enter all fields"});
    User.findOne({username})
    .then(user => {
        if(!user) res.status(400).json({mssg: "User with the given USERNAME does not exist!"});
        else {
            bcrypt.compare(password, user.password)
            .then(isMatch => {
                if(!isMatch) res.status(400).json({mssg: "Invalid Credentials"});
                else {
                    jwt.sign(
                        {id: user.id},
                        config.get("jwtSecret"),
                        {expiresIn: 3600},
                        (err, token) => {
                            if(err) throw err;
                            res.status(300).json({token, user});
                        }
                    );
                }
            })
        }
    });
});

module.exports = router;