import React from "react";
import Home from "./components/pages/Home";
import { Routes, Route } from "react-router-dom";
import Tech from "./components/pages/Tech";
import LearnPage from "./components/LearnPage";

const App = () => {
  return (
    <>
      <Home />
      <Routes>
        <Route path="/" element={<Tech />} />
        <Route path="/learn/:tech" element={<LearnPage />} />
      </Routes>
    </>
  );
};

export default App;
