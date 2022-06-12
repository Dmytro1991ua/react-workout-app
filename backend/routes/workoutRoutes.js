const express = require("express");
const { route } = require("express/lib/application");
const router = express.Router();

const { checkAuth } = require("../middleware/authMiddleware");

const {
  getWorkouts,
  createWorkout,
  updateWorkout,
  deleteWorkout,
  deleteAllWorkouts,
  addWorkoutToFavorites,
} = require("../controller/workoutController");

router.delete("/deleteAllWorkouts", checkAuth, deleteAllWorkouts);
router.put("/:id/addToFavorites", checkAuth, addWorkoutToFavorites);

router.route("/").get(checkAuth, getWorkouts).post(checkAuth, createWorkout);
router.route("/:id").put(checkAuth, updateWorkout).delete(checkAuth, deleteWorkout);

module.exports = router;
