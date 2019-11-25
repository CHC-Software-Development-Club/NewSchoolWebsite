import React from "react";
import styled from "styled-components";
import Navbar from "./Components/navibar";
import Imagecaro from "./Components/imagecaro";
import {Switch,Route} from "react-router-dom";
import Index from "./Pages/Index";

const Heading = styled.h1`
  text-align: center;
  font-weight: 400;
`;

export function App() {
  return (
    <div>
      <Navbar />
      <Imagecaro />
      <Heading>New CHC Web
      </Heading>
      <Switch>
        <Route exact path="/login" component={Index}/>
      </Switch>
    </div>
  );
}

export default App;
