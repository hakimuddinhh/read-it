import styled from 'styled-components';

const DARK_GREY = '#191919';

export const StyledContainer = styled.header`
display: grid;
grid-template-columns: 1fr 1fr;
align-items: center;

&>:last-child {
    justify-self: end;
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



