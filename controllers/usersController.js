const log4 = require("log4js");
const logger = log4.getLogger("index.js");
logger.level = "all"

function register(req, res) {
    logger.trace("Se ha registrado");
    res.status(200).send({msg:`Todo Ok`});
}

module.exports = {
    register,
}