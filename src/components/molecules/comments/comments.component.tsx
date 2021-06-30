import {
  StyledMainContainer,
  StyledCommentsContainer,
  StyledAuthor,
  StyledContent,
  StyledVotes,
  StyledRepliesCount,
  StyledCommentsWrapper,
  StyledNavButton,
  StyledNavButtonContainer,
} from "./comments.styled";
import { PostedAgo } from "../../atoms/posted-ago/posted-ago.component";
import { Votes } from "../../atoms/votes/votes.component";
import repliesIcon from "../../../images/replies.png";
import { useState } from "react";
import loaderStories from "../../atoms/loader/loader.stories";


// interface ICommentItem {
//   parent: ICommentItem;
//   list: [];
// }

export const Comments = ({ data }) => {
  const [commentTracker, setCommentTracker] = useState<any>({
    atLevel: 0,
    replies: [],
  });

  // const [list, setList] = useState<ICommentItem>();

  const setNewReply = (comment) => {
    const commentTrackerUpdated = { ...commentTracker };
    const replies = comment.replies.data.children;
    const title = comment.body;
    commentTrackerUpdated.replies.push({ title, replies });
    commentTrackerUpdated.atLevel++;
    setCommentTracker(commentTrackerUpdated);
  };

  const renderComments = (list) => {
    return (
      list &&
      list.length > 0 &&
      <StyledCommentsWrapper>
      {list.map((comment) => (
        comment.kind !== 'more' ?
        <StyledCommentsContainer key={comment.data.id}>
          <StyledAuthor>{comment.data.author}</StyledAuthor>
          <StyledContent>{comment.data.body}</StyledContent>
          <PostedAgo timestamp={comment.data.created} type="post" />
          <StyledVotes>
            <Votes type={comment.data.ups ? 'upvote' : 'downvote'} count={comment.data.ups || comment.data.downs} />
          </StyledVotes>
          {comment.data.replies?.data?.children.length && (
            <StyledRepliesCount onClick={() => setNewReply(comment.data)}>
              <img
                src={repliesIcon}
                width="20"
                alt={comment.data.replies?.data?.children.length + "replies"}
              />
              {comment.data.replies?.data?.children.length}
            </StyledRepliesCount>
          )}
          <hr />
        </StyledCommentsContainer>
        // below condition gets trigger when there are more comments to load
        // TODO: Add load more functionality on click of below Element
        : <div key={comment.data.id}>No more comments</div>
      ))}
      </StyledCommentsWrapper>
    );
  };

  const goBack = () => {
    const commentTrackerUpdated = { ...commentTracker };
    commentTrackerUpdated.replies.pop();
    commentTrackerUpdated.atLevel--;
    setCommentTracker(commentTrackerUpdated);
  };

  const GetfirstLevelComments = () => {
    setCommentTracker({
      atLevel: 0,
      replies: [],
    });
  };

  return (
    <StyledMainContainer>
      <h3>Comments</h3>
      {commentTracker.atLevel ? (
        <StyledNavButtonContainer>
          <StyledNavButton onClick={goBack}> &#x3c; </StyledNavButton>
          <StyledNavButton onClick={GetfirstLevelComments}>&#x3c; &#x3c;</StyledNavButton>
          <b>
            {commentTracker.replies[commentTracker.replies.length - 1].title}
          </b>
        </StyledNavButtonContainer>
      ) : null}
       
      {renderComments(
        commentTracker.atLevel
          ? commentTracker.replies[commentTracker.replies.length - 1].replies
          : data
      )}
    </StyledMainContainer>
  );
};
