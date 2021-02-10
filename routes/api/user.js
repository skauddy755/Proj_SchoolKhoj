var express     = require("express"),
    mongoose    = require("mongoose");

var KEYS    = require("../../config/keys.js");

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

module.exports = router;