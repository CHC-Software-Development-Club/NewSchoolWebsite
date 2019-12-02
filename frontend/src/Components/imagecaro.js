import React from "react";
import styled from "styled-components";

class Imagecaro extends React.Component {
  render() {
    return <ImagePadding></ImagePadding>;
  }
}

export default Imagecaro;

const ImagePadding = styled.image`
  padding: 50%;
  width: 100px;
  length: 100px;
`;
