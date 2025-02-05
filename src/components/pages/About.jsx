import React from "react";
import Footer from "../Footer";
import AboutSection from "../AboutSection";
import RecentTrips from "../RecentTrips";
import FloatingButton from "../FloatingButton";

function About() {
  return (
    <>
      {/* <FloatingButton /> */}
      <AboutSection />
      <RecentTrips />
      <Footer />
    </>
  );
}

export default About;
