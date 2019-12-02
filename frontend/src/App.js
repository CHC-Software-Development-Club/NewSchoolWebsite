import React from "react";
import styled from "styled-components";
import Navbar from "./Components/navibar";
import Imagecaro from "./Components/imagecaro";
import { Switch, Route } from "react-router-dom";
import Index from "./Pages/Index";
import About from "./Pages/About";

export function App() {
  return (
    <div>
      <Navbar />
      <Imagecaro />
      <Switch>
        <Route exact path="/login" component={Index} />
        <Route exact path="/about" component={About} />
      </Switch>
    </div>
  );
}

export default App;
