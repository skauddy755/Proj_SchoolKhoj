const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");

const KEYS = require("./config/keys");

const userRouter = require("./routes/api/user");
//============================================================================================
//============================================================================================

// Instantiating EXPRESS
const app = express();

//body-parser Middleware
app.use(bodyParser.json());

// DB Config
const db = KEYS.mongoURI;
// Connect to MongoDB
mongoose.connect(db, {
    useUnifiedTopology: true,
    useNewUrlParser: true
})
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.log(err));


// Use Routes
app.use("/api/user", userRouter);

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