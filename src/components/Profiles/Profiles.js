import React from "react";
import { Section, Container, Icons } from "./ProfileElements";
import { FaAngleRight } from "react-icons/fa";

function Profile() {
  return (
    <Section>
      <Container>
        <h3>Peter Kahuhia</h3>
        <p>Main Account Holder</p>
        <Icons>
          <p>Notifications</p>
          <FaAngleRight />
        </Icons>
        <Icons>
          <p>Settings</p>
          <FaAngleRight />
        </Icons>
        <Icons>
          <p>Terms & Conditions</p>
          <FaAngleRight />
        </Icons>
        <Icons>
          <p>History</p>
          <FaAngleRight />
        </Icons>
        <Icons>
          <p>Help</p>
          <FaAngleRight />
        </Icons>
      </Container>
    </Section>
  );
}

export default Profile;
