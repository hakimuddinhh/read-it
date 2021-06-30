import { 
    StyledContainer } 
    from './votes.styled';
import VotesToRender from '../../../helpers/votesToRender';
    // import timeIcon from "../../../images/time.svg";



export interface IPostedAgo {
    type: 'upvote' | 'downvote';
    count: number;
}    

export const Votes = ({type, count }: IPostedAgo) => {
 
    return <StyledContainer>
        {type === 'upvote' ? <strong>/\</strong>  : <strong>\/</strong>}
        {' ' + VotesToRender(count)}
    </StyledContainer>
}