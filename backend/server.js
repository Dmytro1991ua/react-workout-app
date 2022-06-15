const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const colors = require("colors");
const dotenv = require("dotenv").config();
const path = require("path");

const { customExpressErrorHandler } = require("./middleware/errorMiddleware");
const connectDB = require("./config/db");

connectDB();

const port = process.env.PORT || 5000;
const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors({ origin: true }));

app.use("/api/workouts", require("./routes/workoutRoutes"));
app.use("/api/users", require("./routes/userRoutes"));

if (process.env.REACT_APP_NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/build")));

  app.get("*", (req, res) => res.sendFile(path.resolve(__dirname, "../frontend/build", "index.html")));
} else {
  app.get("/", (req, res) => res.send("Please set to production"));
}

app.use(customExpressErrorHandler);

app.listen(port, () => console.log(`Server started on port ${port}`));
