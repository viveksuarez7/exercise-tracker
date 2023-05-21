const express = require("express");
const router = express.Router();
const {
  getExercise,
  addExercise,
  getExerciseById,
  deleteExercise,
  updateExercise,
} = require("../controller/exerciseController");

router.route("/").get(getExercise);
router.route("/:id").get(getExerciseById);
router.route("/add").post(addExercise);
router.route("/:id").delete(deleteExercise);
router.route("/update/:id").post(updateExercise);

module.exports = router;
