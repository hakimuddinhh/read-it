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
    num_comments: number;
    downs: number;
}  

export interface IFeedItemRender extends IFeedItemCommon {
    media?: IFeedVideo | null;
    created: number;
    getCommentAPI: string;
    commentsCount: number,
    votesCount: number,
    votesType: 'upvote' | 'downvote',
} 

  interface IVideo {
    reddit_video: IFeedVideo;
  }