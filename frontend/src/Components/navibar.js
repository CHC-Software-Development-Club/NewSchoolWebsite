import React from 'react';
//Import 
import Container from 'react-bootstrap/Container'
import Button from './Button'

const Navbar = (props) => {
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