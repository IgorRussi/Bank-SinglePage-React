import React, { useState } from "react";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/NavBar/Navbar";
import Sidebar from "../components/Sidebar";

const Home = () => {
  const [isOpen, SetIsOpen] = useState(false);

  const toggle = () => {
    SetIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
    </>
  );
};

export default Home;
