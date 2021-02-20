var express     = require("express"),
    mongoose    = require("mongoose");
    bcrypt      = require("bcryptjs");
    config      = require("config");
    jwt         = require("jsonwebtoken");

var User = require("../../models/User");

var KEYS    = require("../../config/keys.js");

var router = express.Router();

// @route   GET api/users/register
// @desc    REGISTERS NEW USER
// @access  PUBLIC
router.post("/register", (req, res) => {

    const {
        username, password, email, contact, usertype
    } = req.body;
    User.findOne({$or: [{username}, {email}, {contact}]})
    .then(user => {
        if(user) res.status(400).json({mssg: "A User with the given credentials already exists..."});
        else {
            const newUser = new User({
                username, password, email, contact, usertype
            });

            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(password, salt, (err, hash) => {
                    if(err) throw err;
                    newUser.password = hash;
                    newUser.save()
                    .then(user => {
                        jwt.sign(
                            {id: user.id},
                            config.get("jwtSecret"),
                            {expiresIn: 3600},
                            (err, token) => {
                                if(err) throw err;
                                res.status(300).json({token, user});
                            }
                            );
                    })
                })
            });
        }
    });

});

module.exports = router;