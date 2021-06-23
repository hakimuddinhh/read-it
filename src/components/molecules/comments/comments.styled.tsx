import styled from 'styled-components';


export const StyledMainContainer = styled.section`
 
gap: 30px;
display: grid;
width: calc(100% - 100px);
    margin: 0 50px;

`;




export const StyledCommentsContainer = styled.div`
display: grid;
grid-template-rows: auto;
grid-template-columns: 1fr 50px 30px;
gap: 12px;
align-items: center;
animation: mymove .3s 1;
position: relative;
@keyframes mymove {
    from {left: -95vw;}
    to {left: 0;}
  }


`;

export const StyledCommentsWrapper = styled.div`


`;





export const StyledAuthor = styled.div`
grid-row: 1/2;
font-weight: bold;
color: #3e3e3e;
font-size: 16px;

`;
export const StyledContent = styled.div`
grid-row: 2/3;
`;

export const StyledVotes = styled.div`
grid-row: 2/3;
`;

export const StyledRepliesCount = styled.div`
cursor: pointer;
grid-column: 3/3;
grid-row: 1/3;
gap: 2px;
display: flex;
`;

