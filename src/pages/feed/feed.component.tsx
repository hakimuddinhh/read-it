/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef, useState } from "react";
import { useHistory, useLocation } from 'react-router-dom'
import { StyledListingContainer, SpinnerContainer } from "./feed.styled";
import { profileURL, bestListingsURL, bestListingGuestURL } from "../../constants/apis";
import { fetchAPI } from "../../services/index";
import { PageHeader } from "../../components/molecules/page-header/page-header.component";
import { FeedItem } from "../../components/organisms/feed-item/feed-item.component";
import { IFeedItemRequest } from "../../models/feedItem.model";
import { LoaderEvolution, LoaderSpinner } from "../../components/atoms/loader/loader.component";
import {debounce} from '../../helpers/debounce';

const ITEMS_PER_PAGE = 10;

interface IProfile {
  id: string;
  icon_img: string;
  name: string;
  total_karma: number;
}

type IListings = IListing[];

interface IListing {
  data: IFeedItemRequest;
  kind: string;
}

export default function Feed() {
  const [profile, setProfileData] = useState<IProfile>();
  const [listings, setListings] = useState<IListings>([]);
  const [token, setToken] = useState<string>();
  const [isPageLoading, setPageLoading] = useState<boolean>(true);
  const [isItemsLoading, setItemsLoading] = useState<boolean>();
  const scrollContainer = useRef(null);

  const location = useLocation();
  const history = useHistory();
 

  const resetURL = () => {
    const queryParams = new URLSearchParams(location.search)
    queryParams.delete('access_token')
    history.replace({
      search: queryParams.toString(),
    })
  }

  const getProfile = async () => {
    const headers = {
      Authorization: token,
      "User-Agent": "APP-NAME by REDDIT-USERNAME",
    };
    const profileData = await fetchAPI(profileURL, headers);
    setProfileData(profileData);
  };

  const getFeed = async () => {
    const lastElementParam =
      listings.length > 0
        ? `&after=${listings[listings.length - 1].data.name}`
        : "";
    if(lastElementParam) {
      setItemsLoading(true);
    }
    const headers = token ? {
      Authorization: token,
      "User-Agent": "Read It",
    } : {};

    const URL = token ? bestListingsURL : bestListingGuestURL;
    const paginationString = `&limit=${ITEMS_PER_PAGE}${lastElementParam}`;
    const listingsData = await fetchAPI(
      URL + paginationString,
      headers
    );

    if(listingsData.status === 401) {
      resetURL();
      setToken(null);
      return;
    }

    const updatedListings = [...listings, ...listingsData?.data?.children];
    setListings(updatedListings);
    if(lastElementParam) {
      setItemsLoading(false);
    } else {
      setPageLoading(false);
    }

  };



  useEffect(() => {
    if (token) {
      // reset url in which auth params are being passed as its already saved in the component's state
      resetURL();
      // if token is present then get the user's profile and feed
      getProfile();
      getFeed();
    }
  }, [token]);

  useEffect(() => {
    // check if user is authorised / logged in
    if (window.location.href.includes("access_token=")) {
      let token = window.location.href.split("access_token=")[1];
      token = `bearer ${token.split("&token_type")[0]}`;
      setToken(token);
    } else {
      getFeed();
    }
  }, []);

  const onScroll = debounce(() => {
    const { scrollHeight, offsetHeight , scrollTop } = scrollContainer.current;
    const scrollPadding = 50;
    if(scrollTop + offsetHeight > scrollHeight - scrollPadding && listings) {
      getFeed();
    }
  },300);

  return (
    <>
       {profile?.id ? <PageHeader
            imagePath={profile.icon_img}
            username={profile.name}
            karma={profile.total_karma}
          /> : <PageHeader />}
      {!isPageLoading ? (
        <>
          <StyledListingContainer onScroll={onScroll} ref={scrollContainer}>
            {listings &&
              listings.map((listing) => (
                <FeedItem
                  getCommentAPI={listing?.data?.permalink}
                  author={listing?.data?.author}
                  id={listing?.data?.id}
                  subreddit={listing?.data?.subreddit}
                  created={listing?.data?.created_utc}
                  title={listing?.data?.title}
                  selftext={listing?.data?.selftext_html}
                  url={listing?.data?.url}
                  thumbnail={listing?.data?.thumbnail}
                  media={
                    listing?.data?.is_video
                      ? listing?.data?.media?.reddit_video
                      : null
                  }
                />
              ))}
          {isItemsLoading && <SpinnerContainer><LoaderSpinner /></SpinnerContainer> }   
          </StyledListingContainer>
        </>
      ) : (
        isPageLoading && <LoaderEvolution />
      )}
    </>
  );
}
