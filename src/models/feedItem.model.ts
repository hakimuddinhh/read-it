import {IFeedVideo} from './feedVideo.model';

export interface IFeedItemCommon {
    id?: string;
    author?: string;
    link_flair_text?: string;
    subreddit: string;
    title: string;
    ups?: number;
    url: string;
    thumbnail?: string;
    selftext: string;

    
  }

export interface IFeedItemRequest extends IFeedItemCommon{
    is_video?: boolean
    media?: IVideo;
    created_utc: number;
    selftext_html: string;
    name: string;
    over_18: boolean;
    permalink: string;
}  

export interface IFeedItemRender extends IFeedItemCommon {
    media?: IFeedVideo | null;
    created: number;
    getCommentAPI: string;
} 

  interface IVideo {
    reddit_video: IFeedVideo;
  }