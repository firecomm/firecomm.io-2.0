import Link from "next/link";
import styled from "styled-components";

import NavCore from "./NavCore";
import { mobileBreakpoint } from "../constants";

const NavStyle = styled.section`
  display: flex;
  width: 100%;
  font-size: 20px;
  justify-content: ${props => (props.left ? "left" : "space-around")};
  background-color: ${props =>
    props.main ? props.theme.mainColor : props.theme.offColor};

  .logo {
    font-size: 40px;
    color: ${props => props.theme.white};
  }
  .logo a {
    display: flex;
    flex-direction: row;
    width: 200px;
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
  if (props.windowWidth >= mobileBreakpoint) {
    return (
      <NavStyle main>
        <div className="logo">
          <a href="/">
            <i class="fa fa-fire" /> Firecomm
          </a>
        </div>
        <NavCore />
      </NavStyle>
    );
  } else {
    return (
      <>
        <NavStyle main>
          <div className="logo">
            <a href="/">
              <i class="fa fa-fire" /> Firecomm
            </a>
          </div>{" "}
        </NavStyle>
        <NavStyle main>
          <NavCore />
        </NavStyle>
      </>
    );
  }
};

export default Nav;
