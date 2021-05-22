import styled from "styled-components";
import bg from "../../images/bg-main.jpeg";
import bgMain from "../../images/bg-main.webp";



export const StyledSection = styled.section`
  display: flex;
  background: white;
  flex-direction: column;
  width: 300px;
  border-radius: 8px;
  font-weight: bold;
  color: #2f2f2f;
  align-items: center;
  gap: 30px;
  padding: 15px;
`;

export const StyledMain = styled.main`



  background: linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));
  & {background-image: url(${bg});}
  @supports (background-image: -webkit-image-set(url(${bgMain}) 1x)) {
    & {background-image: -webkit-image-set(url(${bgMain}) 1x) }
  }
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  display: grid;
  align-items: center;
  justify-items: center;
`;

export const StyledButton = styled.button`
  all: unset;
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
`;
