import styled from 'styled-components';


export const StyledContainer = styled.section`
color: white;
`;

export const StyledListingContainer = styled.main`
height: calc(100vh - 159px);
transition: height 0.5s ease-in;
overflow-y: scroll;
margin: 15px 10%;
gap: 60px;
display: flex;
flex-direction: column;
padding: 10px;

@media screen and (max-aspect-ratio: 13/9) {
    margin: 15px 0;
    padding: 10px 0;
}

`;

export const StyledButton = styled.button`
all: unset;
display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;
`;

export const SpinnerContainer = styled.div`
transition: all 0.3s;
`;


