import React, { SyntheticEvent, useState } from "react";
import {
  StyledContainer,
  StyledAuthorName,
  StyledPost,
  StyledPostedBefore,
  StyledSubHeader,
  StyledSubRedditLabel,
  StyledTitle,
  StyledButton,
  StyledParagraph,
  StyledPlayerControls,
  StyledVideo,
} from "./feed-item.styled";
import { IFeedItemRender } from "../../../models/feedItem.model";
import { isImage } from "../../../helpers/isImage";
import { getPostedAgoTime } from "../../../helpers/getPostedAgoTime";
import timeIcon from "../../../images/time.svg";
import playIcon from "../../../images/play.png";
import pauseIcon from "../../../images/pause.png";
import readIcon from "../../../images/read.svg";

interface IParagraph {
  text: string;
}

const Paragraph = ({ text }: IParagraph) => {
  const textFiltered = text.replaceAll("&amp;", "&");

  const readMore = (e: any) => {
    e.currentTarget.previousSibling.style.overflowY = "initial";
    e.currentTarget.previousSibling.style.maxHeight = "fit-content";
    e.currentTarget.remove();
  };

  return (
    <>
      <StyledParagraph>{textFiltered}</StyledParagraph>
      {text.length > 400 && (
        <StyledButton onClick={readMore}>
          <img alt="read-more" src={readIcon} width="30" />
        </StyledButton>
      )}
    </>
  );
};

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
}: IFeedItemRender) => {
  const [isVideoPlaying, setVideoPlaying] = useState<IVideoPlaying>({});


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

  return (
    <StyledContainer id={id}>
      <StyledSubHeader>
        <StyledAuthorName>{author}</StyledAuthorName>
        <StyledSubRedditLabel>{subreddit}</StyledSubRedditLabel>
        <StyledPostedBefore>
          <img src={timeIcon} alt="posted ago" width="10" />
          <span>{getPostedAgoTime(created)}</span>
        </StyledPostedBefore>
      </StyledSubHeader>
      <StyledTitle>{title.replaceAll("&amp;", "&")}</StyledTitle>
      <StyledPost>
        {selftext && <Paragraph text={selftext} />}
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
    </StyledContainer>
  );
};
