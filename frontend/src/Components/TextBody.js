import React from "react";
import styled from "styled-components";

const TextBody = props => {
  return (
    <div>
      <TextHolder>
        <p>{props.children}</p>
      </TextHolder>
    </div>
  );
};

const TextHolder = styled.div`
  background-color: #b30000;
  border-radius: 4px;
`;

export default TextBody;
