import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import ScrollToTop from "./components/ScrollToTop";
import Android from "./pages/Android";
import Web from "./pages/Web";
import Logo from "./pages/Logo";
import Smm from "./pages/Smm";
import "aos/dist/aos.css";
import "aos/dist/aos.js";
import Moushn from "./pages/Moushn";
import Service from "./pages/Service";
import About from "./pages/About";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";

function App() {
  return (
    <>
      <HashRouter>
        <Navbar />
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<Portfolio />} path="/portfolio" />
          <Route element={<Contact />} path="/contact" />
          <Route element={<Android />} path="/android" />
          <Route element={<Web />} path="/web" />
          <Route element={<Logo />} path="/logos" />
          <Route element={<Smm />} path="/SMM" />
          <Route element={<Moushn />} path="/3D" />
          <Route element={<Service />} path="services" />
          <Route element={<About />} path="about" />
        </Routes>
        <ScrollToTop />
      </HashRouter>
    </>
  );
}

export default App;
