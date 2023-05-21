const conncetDb = require("./config/dbConnect.js");
const dotenv = require("dotenv").config();
const express = require("express");
const cors = require("cors");
const exercisesRouter = require("./routes/exerciseRoutes.js");
const userRouter = require("./routes/userRoutes.js");
const app = express();
const port = process.env.PORT || 8080;

conncetDb();
app.use(cors());
app.use(express.json());
app.use("/exercises", exercisesRouter);
app.use("/users", userRouter);
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
