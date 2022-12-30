const mongoose = require("mongoose");

const workoutQuizSchema = mongoose.Schema(
  {
    question: { type: String, require: true },
    answers: [
      {
        answerOption: { type: String },
        isCorrect: { type: Boolean },
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("WorkoutQuiz", workoutQuizSchema);
