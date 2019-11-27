import React from 'react';
import Styled from 'styled-components';


const TextBody = props => {
    return(
    <div>
    <TextHolder>
    <p>{props.children}</p>
    </TextHolder>
    </div>
    );
}

const TextHolder = Styled.body`
background-color: #b30000;
border-radius: 4px;
`


export default TextBody;