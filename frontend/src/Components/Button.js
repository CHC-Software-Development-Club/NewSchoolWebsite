import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  color: red;
`;


const Button = (props) => {
  return (
      <StyledButton onClick={props.onClick}>
        <img />
        {props.children}
      </StyledButton>
  );
};

export default Button;
