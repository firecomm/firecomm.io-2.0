import styled from "styled-components";
import { loadGetInitialProps } from "next-server/dist/lib/utils";

const Hamburger = styled.div`
  /* Icon 3 */

  #nav-icon3 {
    width: 30px;
    height: 45px;
    position: relative;
    /* margin: 50px auto; */
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-transition: 0.5s ease-in-out;
    -moz-transition: 0.5s ease-in-out;
    -o-transition: 0.5s ease-in-out;
    transition: 0.5s ease-in-out;
    cursor: pointer;
  }

  span {
    display: block;
    position: absolute;
    height: 5px;
    width: 100%;
    background: ${props => props.theme.black};
    border-radius: 7px;
    opacity: 1;
    left: 0;
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-transition: 0.25s ease-in-out;
    -moz-transition: 0.25s ease-in-out;
    -o-transition: 0.25s ease-in-out;
    transition: 0.25s ease-in-out;
  }

  #nav-icon3 span:nth-child(1) {
    top: 0px;
  }

  #nav-icon3 span:nth-child(2),
  #nav-icon3 span:nth-child(3) {
    top: 9px;
  }

  #nav-icon3 span:nth-child(4) {
    top: 18px;
  }

  #nav-icon3.open span:nth-child(1) {
    top: 9px;
    width: 0%;
    left: 50%;
  }

  #nav-icon3.open span:nth-child(2) {
    -webkit-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    -o-transform: rotate(45deg);
    transform: rotate(45deg);
  }

  #nav-icon3.open span:nth-child(3) {
    -webkit-transform: rotate(-45deg);
    -moz-transform: rotate(-45deg);
    -o-transform: rotate(-45deg);
    transform: rotate(-45deg);
  }

  #nav-icon3.open span:nth-child(4) {
    top: 9px;
    width: 0%;
    left: 50%;
  }
`;

const HamburgerBarStyle = styled.div`
  width: 100%;
  height: 50px;
  background-color: ${props => props.theme.grey};
  display: flex;

  @media only screen and (min-width: 480px) {
    display: none;
  }
`;

const HamburgerBar = props => {
  return (
    <HamburgerBarStyle>
      <button
        onClick={() => {
          document.querySelector("#nav-icon3").classList.add("open");
          props.toggleSidebar();
        }}
      >
        Toggle me
      </button>
      <Hamburger>
        <div id="nav-icon3">
          <span />
          <span />
          <span />
          <span />
        </div>
      </Hamburger>
      <h1>{props.activeSection}</h1>
    </HamburgerBarStyle>
  );
};

export default HamburgerBar;
