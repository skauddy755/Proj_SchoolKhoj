var express     = require("express"),
    mongoose    = require("mongoose");
    bcrypt      = require("bcryptjs");
    config      = require("config");
    jwt         = require("jsonwebtoken");

var User = require("../models/User");

var KEYS    = require("../config/keys.js");
var config  = require("config");

// For every request to a route:
// it validates whether a token is present or not;
// if present then whether its a valid token;
// and if valid it sets a new field 'userTokenData' to the 'req' property
function auth(req, res, next)
{
    const token = req.header('x-auth-token');

    // Check for Token:
    if(!token) res.status(401).json({mssg: "Authorization denied! Token not found..."});
    else
    {
        try {
            // Verify token:
            const decodedToken = jwt.verify(token, config.get("jwtSecret"));
            // Add user from payload:
            req.userTokenData = decodedToken;
            next();
        } catch(e) {
            res.status(400).json({mssg: "Authorization denied! Invalid Token"});
        }        
    }
}


module.exports = auth;