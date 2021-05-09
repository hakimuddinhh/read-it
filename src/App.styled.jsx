import styled from 'styled-components';
import bg from './images/bg.jpeg';

export const StyledContainer = styled.section`
background: linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),${`url('${bg}')`};
width: 100vw;
height: 100vh;
background-size: cover;
    background-repeat: no-repeat;
    background-position: 50% 50%;
    display: grid;
    align-items: center;
    justify-items: center;
`;

export const StyledHeader = styled.section`
color: white;
display: flex;
flex-direction: column;
align-items: center;
gap: 20px;
>* {
    margin: 0;
    
}
>h1 {
    font-size: 32px;
}
`;

