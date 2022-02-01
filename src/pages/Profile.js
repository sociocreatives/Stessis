import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Profiles from "../components/Profiles/Profiles";

function Profile() {
  return (
    <div className="maina">
      <Navbar />
      <Profiles />
      <Footer />
    </div>
  );
}

export default Profile;
