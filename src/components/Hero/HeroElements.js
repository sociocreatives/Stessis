import styled from "styled-components";
import bg from "../../assets/images/landing.jpg";
import bg2 from "../../assets/images/landing2.jpg";

export const Container = styled.div`
  background: #528124;
  color: #fff;
  height: 100vh;
  display: flex;
  justify-content: center;
  justify-items: center;
  align-content: center;
  align-items: center;

  .rows {
    display: grid;
    grid-template-columns: 1fr 1fr;
    height: 100%;
    width: 100%;

    @media screen and (max-width: 960px) {
      display: flex;
      flex-direction: column;
      align-content: center;
      align-items: center;
      text-align: center;
      justify-content: center;
      background: #528124;
    }
  }
  .leftside {
    display: flex;
    flex-direction: column;
    justify-content: center;
    justify-items: left;
    align-content: center;
    align-items: left;
    background-color: white;
    width: 100%;
    height: 100%;
    padding: 0 100px;
    margin-left: 0;
    margin-right: 0;
    text-align: left;
    border-right: 1rem solid #528124;

    @media screen and (max-width: 960px) {
      display: flex;
      flex-direction: column;
      align-content: center;
      align-items: center;
      text-align: center;
      justify-content: center;
      border-right: none;
      background: #528124;
      padding: 0 10px;
      margin-left: 0;
      margin-right: 0;

      background: url(${bg2});
      /* filter: brightness(30%); */
      background-position: center;
      background-size: cover;

      h2 {
        color: white;
        font-weight: 200;
        font-size: 2.5rem;
        line-height: 2.5rem;
        margin-top: 2rem;
        padding: 0 50px;
      }
      img {
        display: flex;
        /* text-align: center;
        align-content: center;
        align-items: center;
        width: 170px; */
      }
    }

    img {
      text-align: left;
      align-content: left;
      align-items: left;
    }
  }

  .rightside {
    background: url(${bg});
    filter: brightness(30%);
    background-position: center;
    background-size: cover;
    /* background-color: #528124; */
    width: 100%;
    height: 100%;

    @media screen and (max-width: 960px) {
      display: none;
    }
  }

  h2 {
    color: black;
    font-weight: 200;
    font-size: 4rem;
    line-height: 4rem;
    margin-top: 2rem;
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
  margin-top: 2rem;
  background-color: #b9060d;
  width: fit-content;
  padding: 1rem 4rem;
  border-radius: 2rem;
  cursor: pointer;
  text-align: left;
  color: white;
  justify-content: left;
  text-decoration: none;

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
    padding: 1rem 3rem;
    margin-top: 3rem;

    :hover {
      background-color: #fff;
      color: #528124;
      transition: 0.2s ease-in-out;
    }
  }
`;

export const Mobimage = styled.div`
  display: none;

  @media screen and (max-width: 960px) {
    display: flex;
    text-align: center;
    align-content: center;
    align-items: center;
    width: 150px;
  }
`;

export const Dimage = styled.div`
  display: flex;
  text-align: center;
  align-content: center;
  align-items: center;
  width: 200px;

  @media screen and (max-width: 960px) {
    display: none;
    /* display: flex;
    text-align: center;
    align-content: center;
    align-items: center;
    width: 170px; */
  }
`;

export const ImagesBottom = styled.div`
  display: none;

  @media screen and (max-width: 960px) {
    display: none;
    /* margin-bottom: 0;
    flex-grow: 1; */
  }
`;
