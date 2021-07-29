import { 
    StyledContainer, StyledVotesIcon } 
    from './votes.styled';
import VotesToRender from '../../../helpers/votesToRender';
    import upIcon from "../../../images/upvote.png";



export interface IPostedAgo {
    type: 'upvote' | 'downvote';
    count: number;
}    

export const Votes = ({type, count }: IPostedAgo) => {
 
    return <StyledContainer>
        <StyledVotesIcon type={type} alt={`${count} votes`} src={upIcon} width="14"/>
        <span>{' ' + VotesToRender(count)}</span>
    </StyledContainer>
}