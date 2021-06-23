import {
  StyledMainContainer,
  StyledCommentsContainer,
  StyledAuthor,
  StyledContent,
  StyledVotes,
  StyledRepliesCount,
  StyledCommentsWrapper,
} from "./comments.styled";
import { PostedAgo } from "../../atoms/posted-ago/posted-ago.component";
import repliesIcon from "../../../images/replies.png";
import { useState } from "react";


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
    debugger;
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
        <StyledCommentsContainer key={comment.data.id}>
          <StyledAuthor>{comment.data.author}</StyledAuthor>
          <StyledContent>{comment.data.body}</StyledContent>
          <PostedAgo timestamp={comment.data.created} type="post" />
          <StyledVotes>
            {comment.data.ups ? comment.data.ups : `-${comment.data.downs}`}
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
        </StyledCommentsContainer>
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
      {commentTracker.atLevel && (
        <>
          <button onClick={goBack}>Back</button>
          <button onClick={GetfirstLevelComments}>First level comments</button>
          <b>
            {commentTracker.replies[commentTracker.replies.length - 1].title}
          </b>
        </>
      )}
       
      {renderComments(
        commentTracker.atLevel
          ? commentTracker.replies[commentTracker.replies.length - 1].replies
          : data
      )}
    </StyledMainContainer>
  );
};
