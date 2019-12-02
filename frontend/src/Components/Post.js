import React from "react";
import styled from "styled-components";
import { Carousel } from "react-bootstrap";
import TextBody from "../Components/TextBody";

class Post extends React.Component {
  render() {
    return (
      <div>
        <AboutBody>
          <h2>Hello World</h2>
          <img src="https://yt3.ggpht.com/a-/AAuE7mBtLORCbhfJD2eCIgQurWzMczYyq88hQe7N7LFL=s88-c-k-c0xffffffff-no-rj-mo" />
          <TextBody>Hello World</TextBody>
        </AboutBody>
      </div>
    );
  }
}
export default Post;

const AboutBody = styled.div`
  align: center;
  width: 50%;
  padding: 0px;
  margin: auto;
  text-align: center;
  background-color: #cc2900;
  color: white;
  border-radius: 10px;
`;

const Image = styled.image`
  border-radius: 10px;
  width: 100px;
`;
