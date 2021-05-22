import styled from 'styled-components';

const DARK_GREY = '#191919';

export const StyledContainer = styled.section`
    display: flex;
    align-items: center;
    flex-direction: column;
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
    font-size: 12px;

`;

export const StyledKarmaField = styled.div`
    display: flex;
    gap: 8px;
    font-size: 12px;
    color: ${DARK_GREY};
`;



