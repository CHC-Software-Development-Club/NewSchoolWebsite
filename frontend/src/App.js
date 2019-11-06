import React from "react";
import styled from "styled-components";
import Navbar from "./Components/navibar"

const Heading = styled.h1` 
  text-align: center;
`;

const backgroundColor = styled.body` 
background-color: gray;
`;

export function App() {
  return (
    <backgroundColor>
    <div id="Whole Website">
      <Navbar />
      <Heading>Demo App</Heading>
    </div>
    </backgroundColor>
  );
}


export default App;
