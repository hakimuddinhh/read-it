import { Avatar, IAvatar } from "../../atoms/avatar/avatar.component";
import { StyledContainer } from "./page-header.styled";
import logo from "../../../images/logo.svg";

interface IPageHeader extends IAvatar {}

export const PageHeader = (props: IPageHeader) => {
  return (
    <StyledContainer>
      <div>
        <img src={logo} alt="Read it logo" />
      </div>
      <div>
      <Avatar {...props} />
      </div>
    </StyledContainer>
  );
};
