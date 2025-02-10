import React from "react";
import "../../App.css";
import HeroSection from "../HeroSection";
import Footer from "../Footer";
import FloatingButton from "../FloatingButton";
import RecentTrips from "../RecentTrips";

function Home() {
  return (
    <>
      <FloatingButton />
      <HeroSection />
      <RecentTrips /> 
      <Footer />
    </>
  );
}

export default Home;
