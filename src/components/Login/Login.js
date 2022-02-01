import React from "react";
import { Container, Button, Images } from "./LoginElements";
import { Link } from "react-router-dom";

import logo from "../../assets/images/logo/stessis_white.png";

function LoginComponent() {
  return (
    <Container>
      <div className="row">
        <div className="login">
          <Images>
            <img src={logo} alt="Stessis Logo" width="200px" />
          </Images>
          <input type="text" name="name" placeholder="Enter Username" />
          <input type="password" name="name" placeholder="Enter Password" />
          <Link to="/landing">
            <Button>LOGIN</Button>
          </Link>
        </div>
        <div className="photo">
          Dont have an account? <Link to="/register">Register</Link>
        </div>
      </div>
    </Container>
  );
}

export default LoginComponent;
