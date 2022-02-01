import React from "react";
import { Container } from "./NavbarElements";
import logo from "../../assets/images/logo/stessis_original.png";
import { Link } from "react-router-dom";
import { FaBell } from "react-icons/fa";

function Navbar() {
  return (
    <Container>
      <div className="Navbar">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="Stessis Logo" width="120px" />
          </Link>
        </div>
        <div className="alerts">
          <FaBell />
        </div>
      </div>
    </Container>
  );
}

export default Navbar;
