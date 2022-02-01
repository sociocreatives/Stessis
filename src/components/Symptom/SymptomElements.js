import styled from "styled-components";
import doc from "../../assets/images/doc.jpg";

export const Section = styled.section``;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  h3 {
    color: #b9060d;
  }
  p {
    font-size: 1rem;
    @media screen and (max-width: 480px) {
      font-size: 1rem;
    }
  }
  img {
    height: 300px;

    @media screen and (max-width: 480px) {
      display: block;
      width: 100%;
      border-radius: 1rem;
      margin: 1rem 0rem;
    }
  }
`;

export const Checks = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
`;
export const CheckOne = styled.div`
  background: #528124;
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  justify-content: center;
  justify-items: center;
  border-radius: 1rem;
  padding: 1rem;
  margin: 1rem 0rem;
  cursor: pointer;

  img {
    height: 80px;
  }
  h3 {
    color: white;
    font-size: 1rem;
  }
`;

export const Topbar = styled.div`
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: space-between;
  justify-items: center;
  width: 100%;
  background: lightgray;
  margin-top: 1rem;
  padding: 0.75rem 1rem;
  border-radius: 2rem;

  margin-bottom: 1rem;
`;

export const Cons = styled.div`
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: center;
  justify-items: center;
  font-size: 1.5rem;
`;

export const ConsTwo = styled.div`
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: center;
  justify-items: center;
`;

export const Image = styled.div`
  width: 100%;
  padding: 5rem;
  border-radius: 1rem;
  margin-top: 2rem;
  margin-bottom: 2rem;
  min-height: 300;
  width: 100%;
  padding: 8rem;
  background: url(${doc});
  background-position: center;
  background-size: cover;

  @media screen and (max-width: 480px) {
    background: url(${doc});
    background-position: center;
    background-size: cover;
    border-radius: 1rem;
    margin-top: 2rem;
    margin-bottom: 2rem;
    width: 100%;
    padding: 5rem;
  }
`;
