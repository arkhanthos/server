const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

/**
 * Import Routes
 */
const userRoute = require("./routes/usersRoutes");

/**
 * Configure Body Parser
 */
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

/**
 * Configure Headers HTTP - CORS
 */
app.use(cors());

/**
 * Configure Statics Folders
 */
app.use(express.static("uploads"));

/**
 * Configure Routes
 */
app.use(`/api/${process.env.API_VER}`, userRoute);


module.exports = app;