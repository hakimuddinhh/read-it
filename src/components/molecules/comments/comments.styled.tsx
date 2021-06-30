import styled from "styled-components";

export const StyledMainContainer = styled.section`
  gap: 30px;
  display: grid;
  max-width: 600px;
  margin: 0 auto;
  padding: 0 10%;
`;

export const StyledCommentsContainer = styled.div`
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: 1fr 50px 30px;
  gap: 12px;
  align-items: center;
  animation: mymove 0.3s 1;
  position: relative;
  @keyframes mymove {
    from {
      left: -95vw;
    }
    to {
      left: 0;
    }
  }

  hr {
    width: 80%;
    border: 1px solid #f1f1f1;
    grid-column: 1/3;
    grid-row: 3/3;
  }
`;

export const StyledCommentsWrapper = styled.div`
  gap: 30px;
  display: grid;
  height: 50vh;
  overflow: scroll;
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
  img {
    transform: scale(0.6);
    opacity: 0.8;
  }
`;

export const StyledNavButton = styled.button`
  all: initial;
  cursor: pointer;
  all: initial;
  cursor: pointer;
  background: #353535;
  color: white;
  font-weight: bold;
  width: 34px;
  height: 34px;
  border-radius: 50%;
  text-align: center;
  letter-spacing: -2px;
`;

export const StyledNavButtonContainer = styled.div`
  gap: 10px;
  display: grid;
  grid-template-columns: 34px 34px 1fr;
  align-items: center;
`;
