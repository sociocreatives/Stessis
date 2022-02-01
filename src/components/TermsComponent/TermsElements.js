import styled from "styled-components";

export const Section = styled.section``;
export const Container = styled.div`
  text-align: justify;
  padding: 2rem 10%;

  @media screen and (max-width: 480px) {
    text-align: left;
  }
`;
export const Termsnew = styled.div`
  h3 {
    color: #528124;
  }
  p {
    padding: 1rem 0rem;
  }

  ul {
    margin-left: 3rem;

    @media screen and (max-width: 480px) {
      margin-left: 1rem;
    }
  }
`;
