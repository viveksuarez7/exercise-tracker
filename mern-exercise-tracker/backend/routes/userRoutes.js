const express = require("express");
const router = express.Router();

const { getUsers, addUser } = require("../controller/userController");

router.route("/").get(getUsers);
router.route("/add").post(addUser);

module.exports = router;
