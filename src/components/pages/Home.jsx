import React from "react";
import "../../App.css";
import HeroSection from "../HeroSection";
import Cards from "../Cards";
import Footer from "../Footer";
import FloatingButton from "../FloatingButton";

function Home() {
  return (
    <>
      <FloatingButton />
      <HeroSection />
      <Cards />
      <Footer />
    </>
  );
}

export default Home;
