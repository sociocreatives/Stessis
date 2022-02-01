import styled from "styled-components";
import tops from "../../assets/images/tops.jpg";

export const Container = styled.div`
  height: 200px;
  width: 100%;
  background-color: green;
  margin-top: 1rem;
  border-radius: 1rem;
  background: url(${tops});
  background-position: center;
  background-size: cover;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  justify-items: center;
  align-content: center;
  align-items: center;
  height: 100%;
  color: white;

  h2 {
    font-size: 1.5rem;
  }

  h3 {
    font-size: 1.5rem;
    font-family: "Nunito", sans-serif;
    font-weight: 200;
  }
  h4 {
    font-size: 1rem;
    font-family: "Nunito", sans-serif;
    font-weight: 200;
    background: #b9060d;
    padding: 0.15rem 1.5rem;
    border-radius: 1rem;
    margin-top: 1rem;
    cursor: pointer;
  }
`;

export const Section = styled.div`
  margin-top: 2rem;
  margin-bottom: 2rem;
  display: grid;
  grid-template-columns: 1.25fr 2.75fr;
  justify-content: center;
  justify-items: center;
  align-content: center;
  align-items: center;
  gap: 2rem;

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    justify-items: center;
    align-content: center;
    align-items: center;
    gap: 2rem;
  }

  .sectionOne {
    background: #dce6d3;
    height: 100%;
    width: 100%;
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    justify-items: center;
    align-content: center;
    align-items: center;
    gap: 1rem;
    padding: 3rem 2rem;
    p {
      font-size: 1.5rem;
      justify-content: center;
      justify-items: center;
      align-content: center;
      align-items: center;
      display: flex;
      padding: 0rem 0.5rem;

      @media screen and (max-width: 960px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        justify-items: center;
        align-content: center;
        align-items: center;
      }

      span {
        justify-content: center;
        justify-items: center;
        align-content: center;
        align-items: center;
        display: flex;
        padding: 0rem 0.25rem;
        color: #b9060d;
      }
    }
  }
  .sectionTwo {
    /* background: #dce6d3; */
    height: 100%;
    width: 100%;
    border-radius: 1rem;

    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-content: center;
    justify-items: center;
    align-content: center;
    align-items: center;
    gap: 1.5rem;

    @media screen and (max-width: 960px) {
      display: flex;
      flex-direction: column;
      justify-content: center;
      justify-items: center;
      align-content: center;
      align-items: center;
      gap: 2rem;
    }

    .cards {
      padding: 1rem;
      border: 0.015rem solid grey;
      border-radius: 1rem;
      img {
        border-radius: 1rem;
      }
      h4 {
        color: #b9060d;
        font-family: "Nunito", sans-serif;
        font-weight: 800;
        padding-bottom: 1rem;
      }
    }
  }
`;

export const Button = styled.div`
  margin-right: 0;
  margin-left: 0;
  font-family: "Nunito", sans-serif;
  font-weight: 800;
  font-size: 1rem;
  text-align: center;
  line-height: 1.2rem;
  display: flex;
  background-color: #b9060d;
  width: fit-content;
  padding: 1rem 4rem;
  border-radius: 2rem;
  cursor: pointer;
  text-align: center;
  color: white;
  justify-content: center;
  align-content: center;
  align-items: center;
  text-decoration: none;
  justify-items: center;
  flex-wrap: nowrap;
  width: 100%;

  .a {
    text-decoration: none;
  }

  :hover {
    background-color: #528124;
    color: #fff;
    transition: 0.2s ease-in-out;
    text-decoration: none;
  }

  @media screen and (max-width: 960px) {
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
    justify-content: center;
    justify-items: center;
    padding: 0.5rem 3rem;
    font-family: "Nunito", sans-serif;
    font-weight: 300;

    :hover {
      background-color: #fff;
      color: #528124;
      transition: 0.2s ease-in-out;
    }
  }
`;
