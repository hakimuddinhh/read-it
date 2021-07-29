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
import {FeedMenu} from '../../molecules/feed-menu/feed-menu.component';
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
  domain,
  id,
  thumbnail,
  media,
  author,
  getCommentAPI,
  commentsCount,
  votesCount,
  votesType,
  preview,
}: IFeedItemRender) => {
  const [isVideoPlaying, setVideoPlaying] = useState<IVideoPlaying>({});
  const [comments, setComments] = useState();

  const handleVideoEvent = (
    e: SyntheticEvent<HTMLDivElement>,
    id: string
  ) => {
    const newVideoState: IVideoPlaying = { ...isVideoPlaying };
    if (isVideoPlaying![`video-${id}`]) {
      (e.currentTarget
        .previousElementSibling as HTMLVideoElement).pause();
      (e.currentTarget
        .nextElementSibling as HTMLVideoElement).pause();
      newVideoState![`video-${id}`] = false;
    } else {
      (e.currentTarget
        .previousElementSibling as HTMLVideoElement).play();
      (e.currentTarget
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

  const hasLinkedPosted = (domain) => {
    if (domain.includes('self.') || domain.includes('.redd') || domain.includes('reddit.com')) {
      return false;
    }
    return true;
  }

  const handleVideoEnded = (id) => {
    const newVideoState: IVideoPlaying = { ...isVideoPlaying };
    newVideoState![`video-${id}`] = false;
    setVideoPlaying(newVideoState);
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
        {selftext && <FeedContent text={selftext} />}
        {thumbnail && thumbnail !== "self" && isImage(url) && (
          <img alt={title} src={url} />
        )}
        {
          hasLinkedPosted(domain) && <div>
            <a href={url} target="_blank" rel="noreferrer">
            <img width="100%" alt={title} src={preview?.images[0].source.url} />
            </a></div>
        }
        {media && (
          <div
            style={{
              position: "relative",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <StyledVideo
              preload="metadata"
              width={media?.width}
              playsInline
              style={{ maxWidth: "100%" }}
              onEnded={() => handleVideoEnded(id)}
            >
              <source src={media?.fallback_url} type="video/mp4" />
            </StyledVideo>
            <StyledPlayerControls onClick={(e) => handleVideoEvent(e, id)}>
              <button>
                <img
                  width="50"
                  src={isVideoPlaying[`video-${id}`] ? pauseIcon : playIcon}
                  alt=""
                />
              </button>
            </StyledPlayerControls>
            <video
              preload="metadata"
              style={{ width: "100px", height: "100px", position: "absolute" }}
              playsInline
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
      <FeedMenu commentsCount={commentsCount} 
      onCommentsClick={getComments}
      votesCount={votesCount} 
      votesType={votesType} />

      {comments && <Comments data={comments} />}

    </StyledContainer>
  );
};
