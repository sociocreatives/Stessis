import styled from "styled-components";
import login from "../../assets/images/login_imagebg.jpg";

export const Container = styled.div`
  background: url(${login});
  background-position: center;
  background-size: cover;
  color: #fff;
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  justify-items: center;
  align-content: center;
  align-items: center;

  .row {
    display: flex;
    flex-direction: column;
    justify-content: center;
    justify-items: center;
    align-content: center;
    align-items: center;
    width: 60%;
    height: 100%;
    background-color: #528124;
    width: fit-content;
    height: fit-content;
    padding: 3rem;
    border-radius: 1rem;
    font-size: 0.75rem;

    .photo {
      padding-top: 1rem;
    }

    @media screen and (max-width: 960px) {
      font-family: "Nunito", sans-serif;
      display: flex;
      justify-content: center;
      align-content: center;
      align-items: center;
      justify-content: center;
      justify-items: center;
      width: 80%;
      height: 100%;
      background-color: #528124;
      width: fit-content;
      height: fit-content;
      padding: 2rem 1.25rem;
      border-radius: 0.75rem;
    }

    @media screen and (max-width: 480px) {
      font-family: "Nunito", sans-serif;
      display: flex;
      justify-content: center;
      align-content: center;
      align-items: center;
      justify-content: center;
      justify-items: center;
      width: 60%;
      height: 100%;
      background-color: #528124;
      width: fit-content;
      height: fit-content;
      padding: 2rem 1rem;
      border-radius: 0.75rem;
    }
  }

  .login {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  input {
    padding: 0.5rem 4rem;
    width: 100%;
    cursor: pointer;
    border-radius: 2rem;
    font-size: 1rem;
    border: none;
    font-family: "Nunito", sans-serif;

    &:focus {
      outline: none;
    }

    @media screen and (max-width: 480px) {
      padding: 0.5rem 2rem;
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
  padding: 0.5rem 4rem;
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
    padding: 0.75rem 3rem;

    :hover {
      background-color: #fff;
      color: #528124;
      transition: 0.2s ease-in-out;
    }
  }
`;

export const Images = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  justify-content: center;
  justify-items: center;
  margin-bottom: 1rem;
  margin-right: 0;
  margin-left: 0;
`;
