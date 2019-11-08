import React from 'react'
import Container from 'react-bootstrap/Container'
import Button from './Button'
import styled from 'styled-components'



const Navbar = () => {
  return (
    <NaviStyle>
      <Button>a</Button>
      <Button>b</Button>
      <img src="./images/logo.png" alt="test" />
      <Button>c</Button>
      <Button>d</Button>
    </NaviStyle>
  );
}

export default Navbar;


const NaviStyle = styled.body `
length: 10%;
margin: 0px;
padding: 0px;
text-align: center;
background-color: red;
`