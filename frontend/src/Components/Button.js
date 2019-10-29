import React from "react";
import styled from "styled-components";

const StyledButton = styled.button``;

const Button = (props) => {
  return (
    <div>
      <StyledButton onClick={props.onClick}>
        <img src={props.src}></img>
      </StyledButton>
    </div>
  );
};

export default Button;
