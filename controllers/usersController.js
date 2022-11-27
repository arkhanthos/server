const User = require("../models/userModel");
const validator = require("../utils/validator");
const log4 = require("log4js");
const logger = log4.getLogger("index.js");
logger.level = "all"

function register(req, res) {
    validator.validateUserRegister(req.body);
    const {firstname, lastname, email, username, department, ccosto, password} = req.body;
    res.status(200).send({msg:`Todo Ok`});
}

module.exports = {
    register,
}