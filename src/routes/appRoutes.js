import React from "react";
import { Routes, Route } from "react-router-dom";
import WelcomePrompt from "../components/welcome-prompt/welcomePrompt";
import MainContainer from "../components/main-container/mainContainer";

const AppRoutes = () => {
  return (
    <Routes>
      <Route exact path="/" element={<WelcomePrompt />} />
      <Route exact path="/resume" element={<MainContainer />} />
    </Routes>
  );
};

export default AppRoutes;
