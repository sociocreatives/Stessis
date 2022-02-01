import React from "react";
import Navbar from "../components/Navbar/Navbar";
import LandingHero from "../components/LandingHero/LandingHero";
import Footer from "../components/Footer/Footer";

function Landing() {
  return (
    <div className="maina">
      <Navbar />
      <LandingHero />
      <Footer />
    </div>
  );
}

export default Landing;
