import React from "react";
import styled from "styled-components";
import logoImage from "../images/logo.avif";
import { useLoginContext } from "../store/LoginContextApi";
import { useNavigate } from "react-router-dom";

const FlexDiv = styled.div`
  display: flex;
  background-color: ${(props) => props.theme.colors.primary};
  height: 45px;
  align-items: center;
  padding: 0 20px;
  border-bottom: 0.3px solid rgba(0, 0, 0, 0.1);
`;

const LeftDiv = styled.div`
  display: flex;
  align-items: center;
`;

const RightDiv = styled.div`
  flex: 1;
`;

const UIDiv = styled.ul`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const LIStyle = styled.li`
  padding: 0 10px;
  &:after {
    content: "";
    display: flex;
    height: 5px;
    background-color: hotpink;
    transform: scaleX(0);
    transition: 300ms;
  }

  &:hover {
    &:after {
      transform: scaleX(1);
    }
  }
`;

const H1_STYLE = {
  marginLeft: "10px",
  color: "#ff8800",
};

const ATAG_STYLE = {
  color: "hotpink",
};

export default function Nav() {
  const navigate = useNavigate();
  const { loggedIn, setLoggedIn } = useLoginContext();

  const logout = () => {
    setLoggedIn(false);
    navigate("/");
  };

  return (
    <FlexDiv>
      <LeftDiv>
        <img src={logoImage} width="30px" height="30px" />
        <strong style={H1_STYLE}>Brighter Myanmar</strong>
      </LeftDiv>
      <RightDiv>
        <UIDiv>
          <LIStyle>
            <a style={ATAG_STYLE} href="#">
              Download
            </a>
          </LIStyle>
          <LIStyle>
            <a style={ATAG_STYLE} onClick={logout} href="#">
              {loggedIn ? "logout" : "login"}
            </a>
          </LIStyle>
        </UIDiv>
      </RightDiv>
    </FlexDiv>
  );
}
