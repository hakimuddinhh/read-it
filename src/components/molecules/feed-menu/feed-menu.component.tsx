import {
  StyledMainContainer,
  StyledButton,
} from "./feed-menu.styled";
import votesToRender from '../../../helpers/votesToRender';

export const FeedMenu = ({  votesType, votesCount, commentsCount, onCommentsClick }) => {

  return (
    <StyledMainContainer>
        <StyledButton>
          <strong>{votesToRender(votesCount)}</strong>
          <span>{votesType === 'upvote' ? ' Upvotes' : ' Downvotes'}</span>
        </StyledButton>
        <StyledButton onClick={onCommentsClick}>
          <strong>{votesToRender(commentsCount)}</strong>
          <span> Comments</span>
        </StyledButton>
    </StyledMainContainer>
  );
};
