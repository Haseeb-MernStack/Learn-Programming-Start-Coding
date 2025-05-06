import React from "react";
import { Routes, Route } from "react-router-dom";
import Tech from "./components/pages/Tech";
import LearnPage from "./components/LearnPage";
import Hero from "./components/Hero";
import PageNotFound from "./components/PageNotFound";
import Contact from "./components/Contact";
import About from "./components/About";
import Languages from "./components/Languages";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="*" element={<PageNotFound />} />
        <Route path="/" element={<Hero />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/languages" element={<Languages />} />
        <Route path="/tech" element={<Tech />} />
        <Route path="/learn/:tech" element={<LearnPage />} />
      </Routes>
    </>
  );
};

export default App;
