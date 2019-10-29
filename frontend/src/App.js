import React from "react";
import styled from "styled-components";
import Navbar from "./Components/navibar"

const Heading = styled.h1` 
  text-align: center;
`;

export function App() {
  return (
    <div>
      <Navbar />
      <Heading>Demo App</Heading>
    </div>
  );
}

export default App;
