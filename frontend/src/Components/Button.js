import React from "react";
import styled from "styled-components";

const StyledButton = styled.button``;

const Button = (props) => {
  return (
      <StyledButton onClick={props.onClick}>
        <img src={props.src}></img>
      </StyledButton>
  );
};

export default Button;
