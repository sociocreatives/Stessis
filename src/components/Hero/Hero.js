import React from "react";
import {
  Container,
  Button,
  Mobimage,
  Dimage,
  ImagesBottom
} from "./HeroElements";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo/stessis_original.png";
import logotwo from "../../assets/images/logo/stessis_white.png";

function Hero() {
  return (
    <Container>
      <div className="rows">
        <div className="leftside">
          <Dimage>
            <img src={logo} alt="Stessis Logo" width="250px" />
          </Dimage>
          <Mobimage>
            <img src={logotwo} alt="Stessis Logo" width="150px" />
          </Mobimage>
          <h2>Outstanding medical Artificial Intelligence technology</h2>
          <Link to="/login">
            <Button>GET STARTED</Button>
          </Link>
          <ImagesBottom>
            <img src={logo} alt="Stessis Logo" width="250px" />
          </ImagesBottom>
        </div>
        <div className="rightside"></div>
      </div>
    </Container>
  );
}

export default Hero;
