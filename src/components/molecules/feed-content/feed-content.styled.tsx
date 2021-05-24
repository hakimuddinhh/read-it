import styled from 'styled-components';
import {marginHorizontalForNonMedia} from '../../../common/mixins/marginHorizontalForNonMedia';


export const StyledButton = styled.div`
display: flex;
    align-items: center;
    bottom: -11px;
    justify-content: center;
  cursor: pointer;
  position: absolute;
  width: 100%;
  left: 0;
  background: rgba(255, 255, 255, 0.9);
  height: 50px;

  &:hover {
      img{
        margin-top: 10px;
        transition: all 0.3s;
      }
  
  }
  &>img {
      margin-top: 0;
      transition: all 0.3s;
      padding: 10px;

  }
`;

export const StyledParagraph = styled.div`
  a {
    color: brown;
letter-spacing: initial;
font-weight: 600;

  }

  table {
    max-width: calc(100vw - 30px);
    overflow: scroll;
  }

  th {
    background: brown;
    color: white;
  }

  td {

    border-bottom: 1px solid #eaeaea;

  }

  max-height: 168px;
  overflow-y: hidden;
  ${marginHorizontalForNonMedia}

`;

