// import React from "react";
import { Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import GamePage from "./pages/GamePage";
import LoginPage from "./pages/LoginPage";
import SignUp from "./pages/SignUpPage";
// import GetAllRiddles from "./api/riddles";

export default function App() {
  return (
    <div>
      <Routes>
        {/* <Route path="/" element={<GetAllRiddles />} /> */}
        <Route path="/" element={<HomePage />} />
        <Route path="/GamePage" element={<GamePage />} />
        <Route path="/LoginPage" element={<LoginPage />} />
        <Route path="/SignUp" element={<SignUp />} />
      </Routes>
    </div>
  );
}
