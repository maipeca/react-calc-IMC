import styled, {keyframes} from 'styled-components';
// eslint-disable-next-line
const spin = keyframes`
from {transform: rotate (0);}
to{transform: rotate(360deg);}
`
export const Heading1 = styled.h1`
    font-size: 1.5rem;
    color:red;
        span{
            display:block;
            color: purple;
            font-size:80%;
        }
`

export const Loader = styled.div `
height: 100px;
width: 100px;
border-top: 4px solid green;
border-radius: 50%;
border-right: 4px solid red;
animation: 1s ${spin} infinite;
`
