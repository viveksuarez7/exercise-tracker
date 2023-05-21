const asyncHandler = require("express-async-handler");
const Exercise = require("../models/exercise.model");
const exercise = require("../models/exercise.model");

//get
const getExercise = asyncHandler(async (req, res) => {
  try {
    const exercise = await Exercise.find();
    res.status(200).json(exercise);
  } catch (err) {
    res.status(400).json("Error", err);
  }
});

//add exercise / post

const addExercise = asyncHandler(async (req, res) => {
  try {
    const username = req.body.username;
    const description = req.body.description;
    const duration = Number(req.body.duration);
    const date = Date.parse(req.body.date);
    const newExercise = new Exercise({ username, description, duration, date });
    newExercise.save();
    res.status(201).json("New Exercise Added");
  } catch (err) {
    res.status(400).json("Error", err);
  }
});

const getExerciseById = asyncHandler(async (req, res) => {
  try {
    const exercise = await Exercise.findById(req.param.id);
    res.status(200).json(exercise);
  } catch (err) {
    res.status(400).json("Error", err);
  }
});

const deleteExercise = asyncHandler(async (req, res) => {
  try {
    const exercise = await Exercise.findByIdAndDelete(req.params.id);
    res.status(200).json(exercise,"Exercise Deleted");
  } catch (err) {
    res.status(400).json("Error", err);
  }
});

const updateExercise = asyncHandler(async (req, res) => {
  try {
    const exercise = await Exercise.findById(req.params.id);
    exercise.username = req.body.username;
    exercise.description = req.body.description;
    exercise.durartion = req.body.duration;
    exercise.date = req.body.date;
    exercise.save();
    res.status(200).json("Exercise Updated");
  } catch (err) {
    res.status(400).json("Error", err);
  }
});
module.exports = { getExercise, addExercise ,getExerciseById, deleteExercise,updateExercise};
