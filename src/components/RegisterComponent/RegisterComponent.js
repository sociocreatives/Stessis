import React from "react";
import { Container, Button, Images } from "./RegisterElements";
import { Link } from "react-router-dom";

import logo from "../../assets/images/logo/stessis_white.png";

function RegisterComponent() {
  return (
    <Container>
      <div className="row">
        <div className="login">
          <Images>
            <img src={logo} alt="Stessis Logo" width="200px" />
          </Images>
          <p>Join us today! it takes only a few steps</p>
          <input type="text" name="name" placeholder="Enter Username" />
          <input type="email" name="email" placeholder="Enter Email" />
          <input type="text" name="phone" placeholder="Enter Phone Number" />
          <input
            type="password"
            name="password1"
            placeholder="Enter Password"
          />
          <input
            type="password"
            name="password2"
            placeholder="Confirm Password"
          />
          <Link to="/landing">
            <Button>REGISTER</Button>
          </Link>
        </div>
        <div className="photo">
          <p>
            Already have an account? <Link to="/login">Sign In</Link>
          </p>
        </div>
      </div>
    </Container>
  );
}

export default RegisterComponent;
