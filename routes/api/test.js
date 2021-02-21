var express     = require("express"),
    mongoose    = require("mongoose");
    cors = require("cors");

var KEYS    = require("../../config/keys.js");
const User = require("../../models/User.js");

const auth = require("../../middleware/auth");

var router = express.Router();

router.get("/obj", cors(), (req, res) => {
    console.log("Hi there!");
    var obj = {
        names: ["sandeep", "akash"],
        num: 5,
        point: {
            x: 89,
            y: 100
        }
    };
    res.json(obj);
});

router.post("/:id",cors(), (req, res) => {
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