import { Avatar, IAvatar } from "../../atoms/avatar/avatar.component";
import { StyledContainer, StyledButton } from "./page-header.styled";
import logo from "../../../images/logo.svg";
import loginURL from "../../../helpers/getLoginURL";

interface IPageHeader extends Partial<IAvatar> {}

export const PageHeader = (props: IPageHeader) => {
  const {imagePath, username, karma} = props;
  return (
    <StyledContainer>
      <div>
        <img width="100" src={logo} alt="Read it logo" />
      </div>
      <div>
      {props.username ? <Avatar imagePath={imagePath} username={username} karma={karma} /> : 
      <StyledButton 
onClick={() => (window.location.href = loginURL)}
      
      >
        Login
      </StyledButton>
      }
      </div>
    </StyledContainer>
  );
};
