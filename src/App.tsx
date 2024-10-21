import React from "react";
import logo from "./logo.svg";
import "./App.css";
import HomeScreen from "./app/Screens/HomeScreen/HomeScreen";
import { Routes, Route } from "react-router-dom";
import TherapistScreen from "./app/Screens/TherapistScreen/TherapistScreen";
import ConfirmationScreen from "./app/Screens/ConfirmationScreen/ConfirmationScreen";

function App() {
  return (
    <Routes>
      <Route path="/*" element={<HomeScreen />}></Route>{" "}
      <Route path="/therapist" element={<TherapistScreen />}></Route>{" "}
      <Route path="/confirmation" element={<ConfirmationScreen />}></Route>{" "}
    </Routes>
  );
}

export default App;
