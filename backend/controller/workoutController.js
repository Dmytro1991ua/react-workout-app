const asyncHandler = require("express-async-handler");
const mongoose = require("mongoose");

const Workout = require("../models/workoutSchema");

// @dec  Get all goals
// @route  GET /api/workouts
// @access Private
const getWorkouts = asyncHandler(async (req, res, next) => {
  const user = req.currentUser;

  try {
    if (user) {
      const workouts = await Workout.find({ user: user.uid });

      res.status(200).json(workouts);
    } else {
      res.status(401).send("Not authorized");
    }
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
});

// @dec  Create new workout
// @route  POST /api/workouts
// @access Private
const createWorkout = asyncHandler(async (req, res, next) => {
  const workout = req.body;
  const user = req.currentUser;

  try {
    if (user) {
      const newWorkout = new Workout({ ...workout, user: user.uid });

      await newWorkout.save();
      res.status(200).json(newWorkout);
    } else {
      res.status(401).send("Not authorized");
    }
  } catch (err) {
    res.status(409);
    throw new Error(err.message);
  }
});

// @dec  Update a specific workout
// @route  PUT /api/workouts/:id
// @access Private
const updateWorkout = asyncHandler(async (req, res, next) => {
  try {
    const { id: _id } = req.params;
    const workout = req.body;
    const user = req.currentUser;

    if (!mongoose.Types.ObjectId.isValid(_id)) {
      res.status(404);
      throw new Error("No workout with that id");
    }

    if (!user) {
      res.status(401);
      throw new Error("User not found");
    }

    if (workout.user !== user.uid) {
      res.status(401);
      throw new Error("User not authorized");
    }

    const updatedWorkout = await Workout.findByIdAndUpdate(
      _id,
      { ...workout, _id },
      {
        new: true,
      }
    );

    res.status(200).json(updatedWorkout);
  } catch (err) {
    res.status(409);
    throw new Error(err.message);
  }
});

// @dec  Delete a specific workout
// @route  DELETE /api/workouts
// @access Private
const deleteWorkout = asyncHandler(async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = req.currentUser;

    const workout = await Workout.findById(id);

    if (!mongoose.Types.ObjectId.isValid(id)) {
      res.status(404);
      throw new Error("No workout with that id");
    }

    if (!user) {
      res.status(401);
      throw new Error("User not found");
    }

    if (workout.user !== user.uid) {
      res.status(401);
      throw new Error("User not authorized");
    }

    await Workout.findByIdAndDelete(id);

    res.status(200).json(id);
  } catch (err) {
    res.status(409);
    throw new Error(err.message);
  }
});

// @dec  Delete all workouts
// @route  DELETE /api/workouts/deleteAllWorkouts
// @access Private
const deleteAllWorkouts = asyncHandler(async (req, res, next) => {
  const user = req.currentUser;

  try {
    if (!user) {
      res.status(401);
      throw new Error("User not found");
    }

    const deleteAllWorkouts = await Workout.deleteMany({ user: user.uid }).exec();

    res.status(200).send({
      success: true,
      message: "All workouts have been deleted successfully",
      deleteAllWorkouts,
    });
  } catch (err) {
    res.status(409);
    throw new Error(err.message);
  }
});

// @dec  Add a specific workout to Favorites
// @route  PUT /api/workouts/:id/addToFavorites
// @access Private
const addWorkoutToFavorites = asyncHandler(async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = req.currentUser;

    const workout = await Workout.findById(id);

    if (!mongoose.Types.ObjectId.isValid(id)) {
      res.status(404);
      throw new Error("No workout with that id");
    }

    if (!user) {
      res.status(401);
      throw new Error("User not found");
    }

    if (workout.user !== user.uid) {
      res.status(401);
      throw new Error("User not authorized");
    }

    const updatedWorkout = await Workout.findByIdAndUpdate(id, { isFavorite: !workout.isFavorite }, { new: true });

    res.status(200).json(updatedWorkout);
  } catch (err) {
    res.status(409);
    throw new Error(err.message);
  }
});

module.exports = {
  getWorkouts,
  createWorkout,
  updateWorkout,
  deleteWorkout,
  deleteAllWorkouts,
  addWorkoutToFavorites,
};
