import Link from "next/link";
import styled from "styled-components";

const NavStyle = styled.section`
  display: flex;
  width: 100%;
  justify-content: space-between;
  background-color: ${props =>
    props.main ? props.theme.mainColor : props.theme.offColor};
`;

const Nav = props => {
  if (props.windowWidth >= 480) {
    return (
      <NavStyle main>
        <h1>Logo</h1>
        <Link href="/">Home</Link>
        <Link>
          <a href="/docs/intro/gettingStarted">Docs</a>
        </Link>
        <Link href="/guides">Guides</Link>
        <Link href="/team">Team</Link>
      </NavStyle>
    );
  } else {
    return (
      <>
        <NavStyle main>
          <h1>Logo</h1>
        </NavStyle>
        <NavStyle>
          <Link href="/">Home</Link>
          <Link>
            <a href="/docs/intro/gettingStarted">Docs</a>
          </Link>
          <Link href="/guides">Guides</Link>
          <Link href="/team">Team</Link>
        </NavStyle>
      </>
    );
  }
};

export default Nav;
