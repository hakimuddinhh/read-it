import { useEffect, useState } from "react";
import { StyledSection, StyledButton, StyledContainer } from "./feed.styled";
import {
  profileURL,
  bestListingsURL,
} from "../../constants/apis";
import { fetchAPI } from "../../services/index";
import { PageHeader } from "../../components/molecules/page-header/page-header.component";

const AccessDenied = () => (
  <div>
    <span>Access Denied</span>
    <StyledButton>Try again</StyledButton>
  </div>
);

interface IProfile {
  id: string;
  icon_img: string;
  name: string;
  total_karma: number;
}

interface IListing {
  id: string;
  author: string;
  link_flair_text: string;
  subreddit: string;
  title: string;
  ups: number;
  url: string;
  created: Date;
}

export default function Feed() {
  const [profile, setProfileData] = useState<IProfile>();
  const [listings, setListings] = useState<any>();

  const getProfile = async (tokenBearer: string) => {
    const headers = {
      Authorization: tokenBearer,
      "User-Agent": "APP-NAME by REDDIT-USERNAME",
    };
    const profileData = await fetchAPI(profileURL, headers);
    setProfileData(profileData);
  };

  const getFeed = async (tokenBearer: string) => {
    const headers = {
      Authorization: tokenBearer,
      "User-Agent": "APP-NAME by REDDIT-USERNAME",
    };
    const listings = await fetchAPI(bestListingsURL, headers);
    setListings(listings?.data);
  };

  useEffect(() => {
    if (window.location.href.includes("access_token=")) {
      let token = window.location.href.split("access_token=")[1];
      token = `bearer ${token.split("&token_type")[0]}`;
      getProfile(token);
      getFeed(token);
    }
  }, []);

  return (
    <StyledContainer>
      {profile?.id ? (
          <PageHeader
            imagePath={profile.icon_img}
            username={profile.name}
            karma={profile.total_karma}
          />
      ) : (
        <AccessDenied />
      )}
    </StyledContainer>
  );
}
