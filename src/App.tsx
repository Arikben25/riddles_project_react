// import React from "react";
import { Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import GamePage from "./pages/GamePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

export default function App() {
  return (
    <div>
      App
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/GamePage" element={<GamePage />} />
        <Route path="/LoginPage" element={<LoginPage />} />
        <Route path="/RegisterPage" element={<RegisterPage />} />
      </Routes>
    </div>
  );
}