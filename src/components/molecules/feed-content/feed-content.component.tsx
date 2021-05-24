import {
  StyledButton,
  StyledParagraph} from './feed-content.styled';
import readIcon from "../../../images/read.svg";

interface IFeedContent {
  text: string;
}

export const FeedContent = ({ text }: IFeedContent) => {
  const readMore = (e: any) => {
    e.currentTarget.previousSibling.style.overflowY = "initial";
    e.currentTarget.previousSibling.style.maxHeight = "fit-content";
    e.currentTarget.remove();
  };

  // find by searching tech-debt
  // show the read more button for less chars for smaller device
  // NOTE: this solution is a workaround as it wont work on resize and will break on stress testing
  const showReadMore = (text) => ((window.innerWidth > 750 && text.length > 400) || (text.length > 130 && window.innerWidth < 700))

  return (
    <>
      <StyledParagraph dangerouslySetInnerHTML={{ __html: text}} />
      {showReadMore(text) && (
        <StyledButton onClick={readMore}>
          <img alt="read-more" src={readIcon} width="30" />
        </StyledButton>
      )}
    </>
  );
};