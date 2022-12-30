const express = require("express");
const router = express.Router();

const { checkAuth } = require("../middleware/authMiddleware");
const { getAvailableQuizQuestions } = require("../controller/workoutQuizController");

router.get("/", checkAuth, getAvailableQuizQuestions);

module.exports = router;
