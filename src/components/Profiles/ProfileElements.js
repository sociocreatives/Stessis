import styled from "styled-components";

export const Section = styled.section``;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 1rem;
  h3 {
    text-align: center;
    color: #bc1212;
    padding-top: 2rem;
    font-size: 2rem;
  }

  p {
    text-align: center;
  }
`;
export const Icons = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  background: #bc1212;
  color: white;
  padding: 0.85rem 1rem;
  border-radius: 2rem;
`;
