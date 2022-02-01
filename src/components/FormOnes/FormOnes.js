import React from "react";
import { FaAngleLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import {
  Section,
  Container,
  Topbar,
  Cons,
  ConsTwo,
  FormsMain,
  FormGroup
} from "./FormOneElements";

function FormOnes() {
  return (
    <Section>
      <Container>
        <Topbar>
          <Cons>
            <Link to="/symptoms">
              <FaAngleLeft />
            </Link>
          </Cons>
          <ConsTwo>
            <h3>Health Check</h3>
          </ConsTwo>
        </Topbar>
        <FormsMain>
          <h3>Fill Basic Details</h3>
          <p>Before using the checkup, please fill your basic information</p>
          <FormGroup>
            <input type="text" name="name" placeholder="Enter Full Name" />
          </FormGroup>
          <FormGroup>
            <input type="email" name="email" placeholder="Enter Email" />
          </FormGroup>
          <FormGroup>
            <input
              type="text"
              name="phone"
              placeholder="Enter Telephone Number"
            />
          </FormGroup>
          <FormGroup>
            <input type="date" name="date" placeholder="Enter Date of Birth" />
          </FormGroup>
          <FormGroup>
            <select>
              <option selected value="female">
                Female
              </option>
              <option value="male">Male</option>
            </select>
          </FormGroup>
          <FormGroup>
            <input type="number" name="number" placeholder="Upper BP" />
            <input type="number" name="number" placeholder="Lower BP" />
          </FormGroup>
          <FormGroup>
            <input type="number" name="number" placeholder="Temperature" />
          </FormGroup>
          <FormGroup>
            <input type="number" name="number" placeholder="Enter ECG" />
            <input type="number" name="number" placeholder="Enter SPO2" />
          </FormGroup>
        </FormsMain>
      </Container>
    </Section>
  );
}

export default FormOnes;
