import styled from "styled-components";
import { PostedAgo } from "../../atoms/posted-ago/posted-ago.component";


export const StyledMainContainer = styled.section`
  gap: 30px;
  display: grid;
  max-width: 600px;
  margin: 0 auto;
  padding: 0 10%;
`;

export const StyledCommentsContainer = styled.div`
  display: grid;
  grid-template-rows: 25px 1fr 10px 10px;
  gap: 20px;
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
    border: 1px solid #f1f1f1;
    grid-column: 1/4;
    grid-row: 4/4;
    width: 80%;
  }
`;

export const StyledCommentsWrapper = styled.div`
  gap: 30px;
  display: grid;
  height: 50vh;
  overflow: scroll;
`;

export const StyledAuthor = styled.div`
  font-weight: bold;
  color: #3e3e3e;
  font-size: 16px;
`;
export const StyledContent = styled.div`
  grid-column: 1/4;

`;

export const StyledVotes = styled.div`
  grid-row: 3/3;
`;

export const StyledPostedAgo = styled(PostedAgo)`
  grid-area: 1/3;
  justify-self: flex-end;

`;

export const StyledRepliesCount = styled.div`
  cursor: pointer;
  grid-column: 3/3;
  gap: 2px;
  display: flex;
  justify-self: flex-end;
  img {
    transform: scale(0.6);
    opacity: 0.8;
  }
`;

export const StyledCommentNavContainer = styled.div`
gap: 10px;
  display: grid;
 
`;

export const StyledNavButtonContainer = styled.div`
  
  align-items: center;
  gap: 10px;
    display: flex;

  button {
    all: initial;
    cursor: pointer;
    all: initial;
    cursor: pointer;
    color: white;
    box-shadow: 2px 1px 3px #b1b1b1;
    font-weight: bold;
    width: 34px;
    height: 34px;
    border-radius: 50%;
    text-align: center;
    letter-spacing: -2px;
  }
`;
