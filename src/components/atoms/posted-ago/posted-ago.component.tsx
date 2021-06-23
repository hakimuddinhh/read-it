import { 
    StyledContainer } 
    from './posted-ago.styled';

    import timeIcon from "../../../images/time.svg";
    import { getPostedAgoTime } from "../../../helpers/getPostedAgoTime";



export interface IPostedAgo {
    timestamp: number;
    type: 'post' | 'comment';
}    

export const PostedAgo = ({timestamp, type }: IPostedAgo) => {
    return <StyledContainer>
        <img src={timeIcon} alt="posted ago" width="10" />
        <span>{getPostedAgoTime(timestamp)}</span>
    </StyledContainer>
}