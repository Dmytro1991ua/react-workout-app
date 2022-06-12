const mongoose = require("mongoose");

const workoutSchema = mongoose.Schema(
  {
    user: { type: String, required: true, ref: "User" },
    id: { type: String },
    date: { type: String, default: new Date() },
    coordinates: [Number],
    selectedValue: { type: String },
    distance: { type: Number },
    duration: Number,
    cadence: { type: String },
    elevationGain: { type: String },
    pace: { type: Number },
    description: { type: String },
    speed: { type: Number },
    isFavorite: { type: Boolean },
    weatherInfo: {
      city: { type: String },
      temperature: { type: Number },
      maxTemperature: { type: Number },
      minTemperature: { type: Number },
      pressure: { type: Number },
      humidity: { type: Number },
      feelsLike: { type: Number },
      weatherInfo: [
        {
          description: { type: String },
          icon: { type: String },
          id: { type: Number },
          main: { type: String },
        },
      ],
      windSpeed: { type: Number },
      countryInfo: {
        country: { type: String },
        sunrise: { type: Number },
        sunset: { type: Number },
      },
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Workout", workoutSchema);
