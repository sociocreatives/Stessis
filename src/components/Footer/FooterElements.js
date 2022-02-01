import styled from "styled-components";

export const Section = styled.div`
  margin: 1rem;
  background-color: #528124;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  margin: 0 auto;
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: center;
  justify-items: center;
  padding: 0.75rem 1rem;
`;

export const Icons = styled.div`
  display: flex;
  justify-content: space-between;
  align-content: center;
  justify-items: center;
  align-items: center;
  width: 100%;
`;
export const IconOne = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  justify-items: center;
  align-items: center;
  color: white;
  cursor: pointer;

  :hover {
    color: #b9060d;
  }

  p {
    font-size: 0.75rem;
    padding-top: 0.25rem;

    :hover {
      color: #b9060d;
    }
  }
`;
