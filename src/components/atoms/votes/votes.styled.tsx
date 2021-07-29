import styled, { css } from "styled-components";

interface IVoteIcon {
    type: 'upvote' | 'downvote'
}

export const StyledContainer = styled.div`
  font-size: 12px;
  font-weight: bold;

  span {
      font-size: 14px;
  }
`;

export const StyledVotesIcon = styled.img(
  ({ type }: IVoteIcon) => css`
  transform: scaleX(.8);
    ${type !== "upvote" &&
    `transform: rotate(
    180deg
    );`}
  `
);
