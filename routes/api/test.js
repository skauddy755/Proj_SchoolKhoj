var express     = require("express"),
    mongoose    = require("mongoose");

var KEYS    = require("../../config/keys.js");
const User = require("../../models/User.js");

const auth = require("../../middleware/auth");

var router = express.Router();

router.get("/", (req, res) => {
    console.log("Hi there!");
    var obj = {
        names: ["sandeep", "akash"],
        num: 5,
        point: {
            x: 89,
            y: 100
        }
    };
    res.status(300).json(obj);
});

router.post("/:id", (req, res) => {
    console.log("POST REQ OCCURED...");
    console.log(req.params);
    console.log(req.body);
    var obj = {mssg: "ok"};
    res.status(301).json(obj);
});

router.get("/getallusers", (req, res) => {
    User.find({}).then(users => {
        res.json(users);
    });
});

router.get("/pvt", auth, (req, res) => {
    console.log(req.userTokenData);
    if(req.userTokenData)
    {
        res.json({mssg: "U hit it sucessfully..."});
    }
});

module.exports = router;