import React from "react";
import { Section, Icons, IconOne } from "./FooterElements";
import { Link } from "react-router-dom";
import {
  FaChartLine,
  FaClinicMedical,
  FaCheckCircle,
  FaUser
} from "react-icons/fa";

function Footer() {
  return (
    <Section>
      <Icons>
        <Link to="/">
          <IconOne>
            <FaClinicMedical />
            <p>Home</p>
          </IconOne>
        </Link>
        <Link to="/">
          <IconOne>
            <FaChartLine />
            <p>Monitor</p>
          </IconOne>
        </Link>
        <Link to="/symptoms">
          <IconOne>
            <FaCheckCircle />
            <p>Healthcheck</p>
          </IconOne>
        </Link>
        <Link to="/profile">
          <IconOne>
            <FaUser />
            <p>Me</p>
          </IconOne>
        </Link>
      </Icons>
    </Section>
  );
}

export default Footer;
