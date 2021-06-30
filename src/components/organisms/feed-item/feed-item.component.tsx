import React, { SyntheticEvent, useState } from "react";
import {
  StyledContainer,
  StyledAuthorName,
  StyledPost,
  StyledSubHeader,
  StyledSubRedditLabel,
  StyledTitle,
  StyledPlayerControls,
  StyledVideo,
} from "./feed-item.styled";
import {base} from '../../../constants/apis';
import { IFeedItemRender } from "../../../models/feedItem.model";
import { isImage } from "../../../helpers/isImage";
import {FeedContent} from '../../molecules/feed-content/feed-content.component';
import {Comments} from '../../molecules/comments/comments.component';
import {PostedAgo} from '../../atoms/posted-ago/posted-ago.component';
import playIcon from "../../../images/play.png";
import pauseIcon from "../../../images/pause.png";
import { fetchAPI } from "../../../services";



interface IVideoPlaying {
  [video: string]: boolean;
}

export const FeedItem = ({
  subreddit,
  created,
  title,
  selftext,
  url,
  id,
  thumbnail,
  media,
  author,
  getCommentAPI,
}: IFeedItemRender) => {
  const [isVideoPlaying, setVideoPlaying] = useState<IVideoPlaying>({});
  const [comments, setComments] = useState();

  const handleVideoEvent = (
    e: SyntheticEvent<HTMLButtonElement>,
    id: string
  ) => {
    const newVideoState: IVideoPlaying = { ...isVideoPlaying };
    if (isVideoPlaying![`video-${id}`]) {
      (e.currentTarget.parentElement
        .previousElementSibling as HTMLVideoElement).pause();
      (e.currentTarget.parentElement
        .nextElementSibling as HTMLVideoElement).pause();
      newVideoState![`video-${id}`] = false;
    } else {
      (e.currentTarget.parentElement
        .previousElementSibling as HTMLVideoElement).play();
      (e.currentTarget.parentElement
        .nextElementSibling as HTMLVideoElement).play();
      newVideoState![`video-${id}`] = true;
    }
    setVideoPlaying(newVideoState);
  };

  const getComments = async () => {
    const URL = base + getCommentAPI + '.json';
    const token = '';
    const headers = token ? {
      Authorization: token,
      "User-Agent": "Read It",
    } : {};
    const response = await fetchAPI(
      URL,
      headers
    );
    setComments(response[1].data.children)

  }

  return (
    <StyledContainer id={id}>
      <StyledSubHeader>
        <StyledAuthorName>{author}</StyledAuthorName>
        <StyledSubRedditLabel>{subreddit}</StyledSubRedditLabel>
        <PostedAgo timestamp={created} type='post'/>
      </StyledSubHeader>
      <StyledTitle onClick={getComments}>{title.replaceAll("&amp;", "&")}</StyledTitle>
      <StyledPost>
        {/* {selftext && <Paragraph text={selftext} />} */}
        {selftext && <FeedContent text={selftext} />}
        {thumbnail && thumbnail !== "self" && isImage(url) && (
          <img alt={title} src={url} />
        )}
        {media && (
          <div
            style={{
              position: "relative",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <StyledVideo
              preload="auto"
              width={media?.width}
              style={{ maxWidth: "100%" }}
            >
              <source src={media?.fallback_url} type="video/mp4" />
            </StyledVideo>
            <StyledPlayerControls>
              <button onClick={(e) => handleVideoEvent(e, id)}>
                <img
                  width="50"
                  src={isVideoPlaying[`video-${id}`] ? pauseIcon : playIcon}
                  alt=""
                />
              </button>
            </StyledPlayerControls>
            <video
              preload="auto"
              style={{ width: "100px", height: "100px", position: "absolute" }}
            >
              <source
                src={
                  media?.dash_url.split("DASHPlaylist")[0] + "DASH_audio.mp4"
                }
                type="video/mp4"
              />
            </video>
          </div>
        )}
      </StyledPost>
      {comments && <Comments data={comments} />}

    </StyledContainer>
  );
};
