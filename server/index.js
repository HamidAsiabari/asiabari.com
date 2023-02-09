require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");

const mongoSRV = process.env.MONGO_SRV;
const port = process.env.PORT || 8000;

// Establising connection with MongoDB
mongoose.connect(mongoSRV, {
    "useNewUrlParser": true,
    "useUnifiedTopology": true,
    "useCreateIndex": true
})
.then(() => console.log("DB Connected"))
.catch((err) => console.log("Error connecting DB", err))

//To enable cross-origin-resources in our application
const corsOptions = {
    origin: "*",
    optionsSuccessStatus: 200
}
app.use(cors(corsOptions));

//To parse JSON body
app.use(bodyParser.json());

//Serving the application on Port
app.listen(port, () => {
    console.log(`App is running on PORT: ${port}`);
})