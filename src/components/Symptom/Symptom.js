import React from "react";
import {
  Section,
  Container,
  Checks,
  CheckOne,
  Topbar,
  Cons,
  ConsTwo,
  Image
} from "./SymptomElements";
import doctor from "../../assets/images/icons/SVG/doctor_1.svg";
import patient from "../../assets/images/icons/SVG/patient.svg";
import { FaAngleLeft } from "react-icons/fa";

import { Link } from "react-router-dom";

function Symptom() {
  return (
    <Section>
      <Container>
        <Topbar>
          <Cons>
            <Link to="/landing">
              <FaAngleLeft />
            </Link>
          </Cons>
          <ConsTwo>
            <h3>Health Check</h3>
          </ConsTwo>
        </Topbar>
        <h3>Hello Peter Kahuhia </h3>
        <p>
          You’re about to use a short (3 min), safe and anonymous health
          checkup. Your answers will be carefully analyzed and you’ll learn
          about possible causes of your symptoms
        </p>
        <Image>{/* <img src={doc} alt="doc" /> */}</Image>
        <h3>Who is the checkup for? </h3>
        <Checks>
          <Link to="/formone">
            <CheckOne>
              <img src={doctor} alt="doc" width="100px" />
              <h3>For Myself </h3>
            </CheckOne>
          </Link>
          <Link to="/formone">
            <CheckOne>
              <img src={patient} alt="doc" width="100px" />
              <h3>For My Patient </h3>
            </CheckOne>
          </Link>
        </Checks>
      </Container>
    </Section>
  );
}

export default Symptom;
