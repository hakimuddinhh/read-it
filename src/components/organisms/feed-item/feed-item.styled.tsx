import styled from "styled-components";

const marginHorizontalForNonMedia = 'margin-left: 15px; margin-right: 15px;';

export const StyledPlayerControls = styled.div`
  position: absolute;
  left: 0px;
  right: 0px;
  opacity: 0.3;
  cursor: pointer;
  top: calc(50% - 27px);
  &>button {
    all: initial;
  }
`;

export const StyledVideo = styled.video`
max-width: 100%;
@media screen and (max-aspect-ratio: 13/9) {
  width: 100%;
}
`;

export const StyledButton = styled.div`
  cursor: pointer;
  position: absolute;
  bottom: 22px;
  width: 100%;
  left: 0;
  background: rgba(255, 255, 255, 0.9);
  height: 50px;

  &:hover {
      img{
        margin-top: 10px;
        transition: all 0.3s;
      }
  
  }
  &>img {
      margin-top: 0;
      transition: all 0.3s;
      padding: 10px;

  }
`;

export const StyledContainer = styled.div`
  display: grid;
  grid-template-rows: max-content;
  align-items: center;
  margin: 10 50px;
  border-bottom: 1px solid #eaeaea;
  padding-bottom: 20px;
`;

export const StyledTitle = styled.h2`
  font-size: 24px;
  color: black;
  ${marginHorizontalForNonMedia}
`;

export const StyledPost = styled.div`
  position: relative;
  font-size: 16px;
  color: black;
  font-weight: light;
  width: 100%;
  text-align: center;
  & > img {
    margin: 16px 0;
    max-width: 100%;
    width: auto;
    max-height: calc(100vh - 245px);
  }
  p {
    font-size: 20px;
    text-align: left;
    letter-spacing: 2px;
    line-height: 28px;
    white-space: pre-wrap;
  }
`;

export const StyledSubHeader = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-content: space-between;

  & > :nth-child(2) {
    justify-self: center;
  }

  & > :last-child {
    justify-self: end;
  }
  ${marginHorizontalForNonMedia}
`;

export const StyledSubRedditLabel = styled.div`
  font-weight: bolder;
`;

export const StyledPostedBefore = styled.div`
  font-weight: lighter;
  font-size: 12px;
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const StyledAuthorName = styled.div``;

export const StyledParagraph = styled.p`
  max-height: 168px;
  overflow-y: hidden;
  ${marginHorizontalForNonMedia}

`;
