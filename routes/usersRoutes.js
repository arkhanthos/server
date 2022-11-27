const express = require("express");
const router = express.Router();
const UserController = require("../controllers/usersController");

router.post("/users/register", UserController.register);

module.exports = router;