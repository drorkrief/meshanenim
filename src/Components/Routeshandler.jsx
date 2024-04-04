import React from "react";
import { Routes, Route, Link, useSearchParams } from "react-router-dom";
import HomePage from "./HomePage";
import Errorpath from "./Errorpath";
import Loginpage from "./Loginpage";
import Support from "./Support";
import Schools from "./Schools";
import Contact from "./Contact";
import About from "./About";

export default function Routeshandler() {
  return (
    <>
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/login" element={<Loginpage />} />
        <Route path="/support" element={<Support />} />
        <Route path="/schools" element={<Schools />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<Errorpath />} />
      </Routes>
    </>
  );
}
