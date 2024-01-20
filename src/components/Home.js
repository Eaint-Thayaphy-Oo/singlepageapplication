import React from "react";
import Nav from "./Nav";
import styled from "styled-components";
import flutterImage from "../images/flutter-3.png";
import javaImage from "../images/Java-Logo.png";
import nodeImage from "../images/node-js.png";

const FlexDiv = styled.div`
  background-color: ${(props) => props.theme.colors.primary};
  display: flex;
  padding: 0 20px;
  align-items: center;
`;

const Flex = styled.div`
  flex: 1;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Button = styled.button`
  background-color: hotpink;
  border: none;
  padding: 10px 20px;
  color: #fff;
  border-radius: 3px;
  margin-top: 20px;

  &:hover {
    background-color: indigo;
  }
`;

export default function Home() {
  return (
    <>
      <Nav />
      <FlexDiv>
        <Flex>
          <h1>Brighter Myanmar</h1>
          <h4>Professional Computer Programming Class</h4>
          <Button>Download Apk</Button>
        </Flex>
        <Flex>
          <img src={flutterImage} alt="ads" width="80%" />
        </Flex>
      </FlexDiv>
      <FlexDiv>
        <Flex>
          <img src={javaImage} alt="ads" width="80%" />
        </Flex>
        <Flex>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, sit
            distinctio aspernatur laboriosam deleniti corrupti eos ad cum
            similique fuga eum dolores magni amet, animi, unde fugit maxime
            reiciendis praesentium?Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Quae, sit distinctio aspernatur laboriosam
            deleniti corrupti eos ad cum similique fuga eum dolores magni amet,
            animi, unde fugit maxime reiciendis praesentium?
          </p>
        </Flex>
      </FlexDiv>
      <FlexDiv>
        <Flex>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, sit
            distinctio aspernatur laboriosam deleniti corrupti eos ad cum
            similique fuga eum dolores magni amet, animi, unde fugit maxime
            reiciendis praesentium?Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Quae, sit distinctio aspernatur laboriosam
            deleniti corrupti eos ad cum similique fuga eum dolores magni amet,
            animi, unde fugit maxime reiciendis praesentium?
          </p>
        </Flex>
        <Flex>
          <img src={nodeImage} alt="ads" width="80%" />
        </Flex>
      </FlexDiv>
    </>
  );
}
