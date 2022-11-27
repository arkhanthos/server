const mongoose = require("mongoose");
const log4 = require("log4js");
const dotenv = require("dotenv").config();
const logger = log4.getLogger("index.js");
logger.level = "all"
const app = require("./app");

const PORT = process.env.PORT || 4545;



mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}/`, (error) => {
    if (error) throw logger.error(`CODE: 501 | Message error: ${error}`);
    app.listen(PORT, () => {
        logger.debug("BDD Access is Success!");
        logger.debug(`Server its Running in http://${process.env.IP_SERV}:${PORT}/api/${process.env.API_VER}/`);
    })
});