const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const colors = require("colors");
const dotenv = require("dotenv").config();

const { customExpressErrorHandler } = require("./middleware/errorMiddleware");
const connectDB = require("./config/db");

connectDB();

const port = process.env.REACT_APP_PORT || 5000;
const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors({ origin: true }));

app.use("/api/workouts", require("./routes/workoutRoutes"));
app.use("/api/users", require("./routes/userRoutes"));

app.use(customExpressErrorHandler);

app.listen(port, () => console.log(`Server started on port ${port}`));
