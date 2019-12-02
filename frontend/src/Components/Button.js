import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledButton = styled(Link)`
  color: red;
  background: white;
  border-radius: 4px;
  font-weight: 700;
  padding: 8px 12px;
  margin: 0 8px;
  border: none;
  text-decoration: none;
`;

const Button = props => {
  return <StyledButton to={props.to}>{props.children}</StyledButton>;
};

export default Button;
