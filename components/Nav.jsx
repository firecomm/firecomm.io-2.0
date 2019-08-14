import Link from "next/link";
import styled from "styled-components";

import NavCore from "./NavCore";
import { mobileBreakpoint } from "../constants";

import { VerticalCenter, Flex } from "../styles/styles";

const NavStyle = styled.section`
  height:50px;
  display: flex;
  width: 100%;
  font-size: 17.5px;
  justify-content: ${props => (props.left ? "left" : "space-between")};
  background-color: ${props =>
    props.main ? props.theme.mainColor : props.theme.offColor};

    img {
      margin-top:4px;
    }
  .logo {
    margin-top:2px;
    font-size: 30px;
    font-weight:700;
    width:225px;
    color: ${props => props.theme.white};
  }

  .logo a {
    margin-left:20px;
    font-size: 25px;
  }

  .logo a:hover {
    text-decoration: none;
  }

  .justify-left {
    justify-content: left !important;
  }

  a {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  a:hover {
    cursor: pointer;
    text-decoration: underline;
    /* background-color: ${props => props.theme.darkMainColor}; */
  }
  i {
    color: ${props => props.theme.white};
    font-size: 40px;
  }
`;

const Nav = props => {
  React.useEffect(() => {
    console.log("windowwidth", props.windowWidth);
  });
  if (props.windowWidth >= mobileBreakpoint) {
    return (
      <NavStyle main>
        <div className="logo">
          <Flex>
            <VerticalCenter>
              <a href="">
                <img
                  src="/static/assets/logo_inverted.png"
                  width="35px"
                  height="40px"
                />
              </a>
            </VerticalCenter>
            <VerticalCenter>
              <a href="/">Firecomm</a>
            </VerticalCenter>
          </Flex>
        </div>
        <NavCore />
      </NavStyle>
    );
  } else {
    return (
      <>
        <NavStyle main>
          <div className="logo">
            <Flex>
              <VerticalCenter>
                <a href="/">
                  <img
                    src="/static/assets/logo_inverted.png"
                    width="35px"
                    height="40px"
                  />
                </a>
              </VerticalCenter>
              <VerticalCenter>
                <a href="/">Firecomm</a>
              </VerticalCenter>
            </Flex>
          </div>
        </NavStyle>
        <NavStyle main>
          <NavCore />
        </NavStyle>
      </>
    );
  }
};

export default Nav;
