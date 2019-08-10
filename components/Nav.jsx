import Link from "next/link";
import styled from "styled-components";

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
  }
  i {
    color: ${props => props.theme.white};
    font-size: 40px;
  }
`;

const Nav = props => {
  if (props.windowWidth >= 480) {
    return (
      <NavStyle main>
        <div className="logo">
          <a href="/">
            <i class="fa fa-fire" /> Firecomm
          </a>
        </div>
        <Link href="/">
          <a href="/">Home</a>
        </Link>
        <Link>
          <a href="/docs/intro/gettingStarted">Docs</a>
        </Link>
        <Link href="/guides">
          <a href="/guides">Guides</a>
        </Link>
        <Link>
          <a href="https://github.com/oslabs-beta/firecomm">
            <i class="fa fa-github" />
          </a>
        </Link>
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
        <NavStyle>
          <Link href="/">
            <a href="/">Home</a>
          </Link>
          <Link>
            <a href="/docs/intro/gettingStarted">Docs</a>
          </Link>
          <Link href="/guides">
            <a href="/guides">Guides</a>
          </Link>
          <Link>
            <a href="https://github.com/oslabs-beta/firecomm">
              <i class="fa fa-github" />
            </a>
          </Link>
        </NavStyle>
      </>
    );
  }
};

export default Nav;
