const express = require("express");
const router = express.Router();

const { getUser } = require("../controller/userController");
const { checkAuth } = require("../middleware/authMiddleware");

router.get("/me", checkAuth, getUser);

module.exports = router;
