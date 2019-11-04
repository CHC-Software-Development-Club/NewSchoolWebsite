import React from 'react'
import Container from 'react-bootstrap/Container'
import Button from './Button'
import styled from 'styled-components'

const Navbar = () => {
  return (
    <NaviStyle>
      <Button>a</Button>
      <Button>b</Button>
      <Button>c</Button>
      <Button>d</Button>
    </NaviStyle>
  );
}

export default Navbar;

//This is the styled Component
const NaviStyle = styled.body `
width: 100%;
length: 10%
text-align: center;
background-color: red;
`