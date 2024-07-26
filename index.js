const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const movieRoute = require("./router/auth")
const bodyParser = require("body-parser")
const cors = require("cors");

dotenv.config();
const app = express();

app.use(bodyParser.json({ limit: "20mb" }));
app.use(bodyParser.urlencoded({ extended: true, limit: "20mb" }));
app.use(cors({ origin: "*" }));
app.use(express.json());

app.use("/api/auth", movieRoute);



mongoose.connect(process.env.MONGO_URL, {
})

app.listen(process.env.PORT, ()=> {
    console.log("Server started... " + mongoose);
})
