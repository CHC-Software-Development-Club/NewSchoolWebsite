import React from 'react';
//Import 
import Container from 'react-bootstrap/Container'
import Button from './Button'

const Navbar = function(props) {
  return (
    <Container fluid={true}>
      <Button>a</Button>
      <Button>b</Button>
      <Button>c</Button>
      <Button>d</Button>
    </Container>
  );
}

export default Navbar;

//This is the styled Component
const NaviStyle = styled.nav `
  backround-color: red,
  color: #eaebeb;
`