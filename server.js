const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");
const config = require("config");

const KEYS = require("./config/keys");

const testRouter = require("./routes/api/test");
const usersRouter = require("./routes/api/users");
const authRouter = require("./routes/api/auth");
//============================================================================================
//============================================================================================

// Instantiating EXPRESS
const app = express();

//body-parser Middleware
app.use(bodyParser.json());

// DB Config
const db = config.get("mongoURI"); //KEYS.mongoURI;
// Connect to MongoDB
mongoose.connect(db, {
    useUnifiedTopology: true,
    useNewUrlParser: true
})
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.log(err));


// Use Routes
app.use("/api/test", testRouter);
app.use("/api/users", usersRouter);
app.use("/api/auth", authRouter);

// SERVE CLIENT AS STATIC ASSETS:
if(process.env.NODE_ENV === "production")
{
    app.use(express.static("client/build"));
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
    });
}

// PORT and Listen config
var port = KEYS.PORT;
app.listen(port, ()=>console.log(`Server is running at port: ${port}`));