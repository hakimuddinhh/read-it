import { 
    StyledContainer,
    StyledProfileImage,
    StyledUsername,
    StyledKarmaField, } 
    from './avatar.styled';

import karmaImg from '../../../images/karma.svg';


export interface IAvatar {
    imagePath: string;
    username: string;
    karma: number;
}    

export const Avatar = ({imagePath, username, karma }: IAvatar) => {
    return <StyledContainer>
        <StyledProfileImage>
            <img width="50" height="50" src={imagePath} alt={username} />
        </StyledProfileImage> 
        <StyledUsername>{username}</StyledUsername>
        <StyledKarmaField>
            <img src={karmaImg} alt="karma" />
            <span>{karma}</span>
        </StyledKarmaField>
    </StyledContainer>
}