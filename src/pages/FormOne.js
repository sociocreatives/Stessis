import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import FormOnes from "../components/FormOnes/FormOnes";

function FormOne() {
  return (
    <div className="maina">
      <Navbar />
      <FormOnes />
      <Footer />
    </div>
  );
}

export default FormOne;
