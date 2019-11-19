import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  color: red;
  background: white;
  border-radius: 4px;
  font-weight: 700;
  padding: 8px 12px;
  margin: 0 8px;
  border: none;
`;

const Button = props => {
  return (
    <StyledButton onClick={props.onClick}>
      <img />
      {props.children}
    </StyledButton>
  );
};

export default Button;
