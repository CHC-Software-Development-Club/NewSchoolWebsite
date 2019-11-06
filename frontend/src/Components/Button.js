import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  color: red;
`;

const Button = (props) => {
  return (
      <StyledButton onClick={props.onClick}>
        <h1 />
        {props.children}
      </StyledButton>
  );
};

export default Button;
