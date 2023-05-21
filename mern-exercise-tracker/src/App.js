import React from "react";
import Navbar from "./components/Navbar.js";
import ExercisesList from "./components/ExerciseList.js";
import EditExercise from "./components/EditExercise.js";
import CreateExercise from "./components/createExercise.js";
import CreateUser from "./components/createUser.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <br />
      <Routes>
        <Route exact path="/" component={ExercisesList} />
        <Route path="/edit/:id" component={EditExercise} />
        <Route path="/create" component={CreateExercise} />
        <Route path="/user" component={CreateUser} />
      </Routes>
    </Router>
  );
}

export default App;
