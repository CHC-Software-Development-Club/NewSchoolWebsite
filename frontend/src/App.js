import React from "react";
import styled from "styled-components";
import Navbar from "./Components/navibar";
import Imagecaro from "./Components/imagecaro";

const Heading = styled.h1` 
  text-align: center;
`;


export function App() {
  return (
    <div>
      <Navbar />
      <Imagecaro />
      <Heading>New CHC Web</Heading>
    </div>
  );
}


export default App;
