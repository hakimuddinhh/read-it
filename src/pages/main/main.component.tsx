import { useHistory } from 'react-router-dom'
import { StyledMain, StyledSection, StyledButton } from "./main.styled";
import redditLogo from "../../images/reddit-logo.png";
import loginURL from "../../helpers/getLoginURL";

export default function Home() {
  const history = useHistory();

  return (
    <StyledMain>
    <StyledSection>
      <StyledButton onClick={() => (window.location.href = loginURL)}>
        <span>Login with</span>
        <img width="50" alt="readit" height="50" src={redditLogo} />
      </StyledButton>
      <span>OR</span>
      <StyledButton onClick={() => history.push(`/feed`)}>Continue as a guest</StyledButton>
    </StyledSection>
    </StyledMain>
  );
}
