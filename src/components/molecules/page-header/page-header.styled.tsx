import styled from 'styled-components';

const DARK_GREY = '#191919';

export const StyledContainer = styled.header`
display: grid;
grid-template-columns: 1fr 1fr;
align-items: center;
padding: 20px;
&>:last-child {
    justify-self: end;
}
`;

export const StyledButton = styled.button`
all: inherit;
color: white;
background: #3c3c3c;
padding: 7px;
font-weight: bold;
border-radius: 10px;
font-size: 14px;
cursor: pointer;
transition: all 0.3s ease-in;
&:hover {
    box-shadow: 0 2px 3px grey;
transition: all 0.3s ease-out;

}
`;

export const StyledProfileImage = styled.div`
    &>img {
        border-radius: 50%;
        box-shadow: 0px -3px 0px grey;
    }
`;

export const StyledUsername = styled.span`
    display: flex;
    font-weight: bold;
    color: ${DARK_GREY};
    font-size: 20px;

`;

export const StyledKarmaField = styled.div`
    display: flex;
    gap: 5px;
    font-size: 18px;
    color: ${DARK_GREY};
`;



