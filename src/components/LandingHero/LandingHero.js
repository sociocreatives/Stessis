import React from "react";
import { Container, Row, Section, Button } from "./LandingHeroElements";
import newsOne from "../../assets/images/news1.jpeg";
import newsTwo from "../../assets/images/news2.jpeg";
import newsThree from "../../assets/images/news3.jpeg";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { Link } from "react-router-dom";

function LandingHero() {
  return (
    <Container>
      <Row>
        <h2>Good Day</h2>
        <h3>Peter Kahuhia</h3>
        <h4>Sign Out</h4>
      </Row>
      <Section>
        <div className="sectionOne">
          <p>How can we help?</p>
          <Link to="/Symptoms">
            <Button>Check Symptoms</Button>
          </Link>
          <Link to="/terms">
            <Button>Book Appointment</Button>
          </Link>
          <p>
            Discover Us
            <span>
              <FaRegArrowAltCircleRight />
            </span>
          </p>
        </div>
        <div className="sectionTwo">
          <div className="cards">
            <img src={newsOne} alt="Stessis Logo" width="100%" />
            <h4>Towards Universal Health Coverage for all</h4>
            <p>
              Quality primary healthcare services in your hands. We believe
              modern healthcare means patient-centric healthcare, whatever their
              situation.
            </p>
          </div>
          <div className="cards">
            <img src={newsTwo} alt="Stessis Logo" width="100%" />
            <h4>Towards Universal Health Coverage for all</h4>
            <p>
              Quality primary healthcare services in your hands. We believe
              modern healthcare means patient-centric healthcare, whatever their
              situation.
            </p>
          </div>
          <div className="cards">
            <img src={newsThree} alt="Stessis Logo" width="100%" />
            <h4>Towards Universal Health Coverage for all</h4>
            <p>
              Quality primary healthcare services in your hands. We believe
              modern healthcare means patient-centric healthcare, whatever their
              situation.
            </p>
          </div>
        </div>
      </Section>
    </Container>
  );
}

export default LandingHero;
