const asyncHandler = require("express-async-handler");
const mongoose = require("mongoose");

const WorkoutQuiz = require("../models/workoutQuizSchema");

// @dec  Get all, available workouts quiz questions
// @route  GET /api/workouts-quiz
// @access Private
const getAvailableQuizQuestions = asyncHandler(async (req, res, next) => {
  const user = req.currentUser;

  try {
    if (user) {
      const workoutsQuizQuestions = await WorkoutQuiz.find({});

      res.status(200).json(workoutsQuizQuestions);
    } else {
      res.status(401).send("Not authorized");
    }
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
});

module.exports = {
  getAvailableQuizQuestions,
};
