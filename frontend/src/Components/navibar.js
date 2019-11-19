import React from "react";
import Container from "react-bootstrap/Container";
import Button from "./Button";
import styled from "styled-components";

const Navbar = () => {
  return (
    <NaviStyle>
      <Button>a</Button>
      <Button>b</Button>
      <Image src="/images/logo.png" alt="test" />
      <Button>c</Button>
      <Button>d</Button>
    </NaviStyle>
  );
};

export default Navbar;

const NaviStyle = styled.body`
  margin: 0px;
  padding: 0px;
  text-align: center;
  background-color: red;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Image = styled.img`
  margin: 0 15px;
`;
