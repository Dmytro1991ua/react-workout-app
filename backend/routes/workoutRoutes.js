const express = require("express");
const { route } = require("express/lib/application");
const router = express.Router();

const {
  getWorkouts,
  createWorkout,
  updateWorkout,
  deleteWorkout,
  deleteAllWorkouts,
  addWorkoutToFavorites,
} = require("../controller/workoutController");

router.delete("/deleteAllWorkouts", deleteAllWorkouts);
router.put("/:id/addToFavorites", addWorkoutToFavorites);

router.route("/").get(getWorkouts).post(createWorkout);
router.route("/:id").put(updateWorkout).delete(deleteWorkout);

module.exports = router;
