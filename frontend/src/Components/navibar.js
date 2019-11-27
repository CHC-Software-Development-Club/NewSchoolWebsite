import React from "react";
import Container from "react-bootstrap/Container";
import Button from "./Button";
import styled from "styled-components";

const Navbar = () => {
  return (
    <NaviStyle>
      <Button to="/about">About</Button>
      <Button>Athletics</Button>
      <Image src="/images/logo.png" alt="test" />
      <Button>Contact</Button>
      <Button to="/login">Login</Button>
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
  margin: 0 5px;
  width: 150px;
`;
