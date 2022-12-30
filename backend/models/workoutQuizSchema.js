const mongoose = require("mongoose");

const workoutQuizSchema = mongoose.Schema(
  {
    question: { type: String, require: true },
    answer: [
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
