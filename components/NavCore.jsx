import Link from "next/link";
import styled from "styled-components";
import { mobileBreakpoint } from "../constants";

const NavCoreFlex = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-around;

  a {
    background-color: ${props => props.theme.darkMainColor};
    text-align: center;
    flex-grow: 1;
  }

  .big-a {
    flex-grow: 2;
  }

  a:hover {
    background-color: ${props => props.theme.mainColor};
  }

  @media only screen and (min-width: ${mobileBreakpoint}px) {
    width: 330px;
    margin-right: 20px;
    justify-content: space-between;
    background-color: ${props => props.theme.mainColor};

    a {
      background-color: transparent;
    }
    a:hover {
      background-color: transparent;
    }
  }
`;

const NavCore = () => {
  return (
    <>
      <NavCoreFlex>
        <Link>
          <a href="/docs/intro/gettingStarted">Getting Started</a>
        </Link>
        <Link>
          <a href="/docs/intro/gettingStarted">API</a>
        </Link>
        <Link href="/guides">
          <a href="/guides">Guides</a>
        </Link>
        <Link>
          <a href="https://github.com/oslabs-beta/firecomm">
            <i class="fa fa-github" />
          </a>
        </Link>
      </NavCoreFlex>
    </>
  );
};

export default NavCore;
