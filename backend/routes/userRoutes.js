const express = require("express");
const router = express.Router();

const { getUser, updateUserProfile } = require("../controller/userController");
const { checkAuth } = require("../middleware/authMiddleware");

router.get("/me", checkAuth, getUser);
router.post("/profile", checkAuth, updateUserProfile);

module.exports = router;
