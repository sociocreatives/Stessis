import React from "react";
import TermsComponent from "../components/TermsComponent/TermsComponent";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

function Terms() {
  return (
    <div className="maina">
      <Navbar />
      <TermsComponent />
      <Footer />
    </div>
  );
}

export default Terms;
