import React from "react";
import logo from "./logo.svg";
import "./App.css";
import HomeScreen from "./app/Screens/HomeScreen/HomeScreen";
import { Routes, Route } from "react-router-dom";
import TherapistScreen from "./app/Screens/TherapistScreen/TherapistScreen";

function App() {
  return (
    <Routes>
      <Route path="/*" element={<HomeScreen />}></Route>{" "}
      <Route path="/therapist" element={<TherapistScreen />}></Route>{" "}
    </Routes>
  );
}

export default App;
