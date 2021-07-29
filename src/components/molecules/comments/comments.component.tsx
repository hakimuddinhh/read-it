import { useState, useRef } from "react";
import {
  StyledMainContainer,
  StyledCommentsContainer,
  StyledAuthor,
  StyledContent,
  StyledPostedAgo,
  StyledVotes,
  StyledRepliesCount,
  StyledCommentsWrapper,
  StyledCommentNavContainer,
  StyledNavButtonContainer,
} from "./comments.styled";
import { Votes } from "../../atoms/votes/votes.component";
import repliesIcon from "../../../images/replies.png";
import backIcon from "../../../images/back.png";
import commentsHomeIcon from "../../../images/rewind.png";


export const Comments = ({ data }) => {
  const [commentTracker, setCommentTracker] = useState<any>({
    atLevel: 0,
    replies: [],
  });

  const commentsContainerRef = useRef(null);


  const setNewReply = (comment) => {
    const commentTrackerUpdated = { ...commentTracker };
    const replies = comment.replies.data.children;
    const title = comment.body;
    commentTrackerUpdated.replies.push({ title, replies });
    commentTrackerUpdated.atLevel++;
    setCommentTracker(commentTrackerUpdated);
    // TODO: below code | scroll to the top when clicked on any replies
    // commentsContainerRef.current.scrollTo(0, 0)
  };

  const renderComments = (list) => {

    
    return (
      list &&
      list.length > 0 &&
      <StyledCommentsWrapper>
      {list.map((comment) => (
        comment.kind !== 'more' ?
        <StyledCommentsContainer ref={commentsContainerRef} key={comment.data.id}>
          <StyledAuthor>{comment.data.author}</StyledAuthor>
          <StyledPostedAgo timestamp={comment.data.created} type="post" />
          <StyledContent>{comment.data.body}</StyledContent>
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
        <StyledCommentNavContainer>
        <StyledNavButtonContainer>
          <button onClick={goBack}><img width="15" src={backIcon} alt={'Go to previous comments'} /></button>
          <button onClick={GetfirstLevelComments}><img width="15" src={commentsHomeIcon} alt={'Go to first level comments'} /></button>
        </StyledNavButtonContainer>
          <b>
            {commentTracker.replies[commentTracker.replies.length - 1].title}
          </b>
          </StyledCommentNavContainer>
      ) : null}
       
      {renderComments(
        commentTracker.atLevel
          ? commentTracker.replies[commentTracker.replies.length - 1].replies
          : data
      )}
    </StyledMainContainer>
  );
};
