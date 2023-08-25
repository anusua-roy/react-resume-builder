import React from "react";
import { Routes, Route } from "react-router-dom";
import WelcomePrompt from "../components/welcome-prompt/welcomePrompt";
import ResumeList from "../components/all-resume-list/resumeList";

const AppRoutes = () => {
  return (
    <Routes>
      <Route exact path="/" element={<WelcomePrompt />} />
      <Route exact path="/resumes" element={<ResumeList />} />
    </Routes>
  );
};

export default AppRoutes;
