import React from "react";
import { Routes, Route } from "react-router-dom";
import Tech from "./components/pages/Tech";
import LearnPage from "./components/LearnPage";
import Hero from "./components/Hero";
import PageNotFound from "./components/PageNotFound";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="*" element={<PageNotFound />} />
        <Route path="/" element={<Hero />} />
        <Route path="/tech" element={<Tech />} />
        <Route path="/learn/:tech" element={<LearnPage />} />
      </Routes>
    </>
  );
};

export default App;
