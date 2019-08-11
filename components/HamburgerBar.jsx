import styled from "styled-components";
import { loadGetInitialProps } from "next-server/dist/lib/utils";

import { mobileBreakpoint } from "../constants";
import { VerticalCenter, Flex } from "../styles/styles";

const SectionTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 20px;
  font-size: 20px;
  font-weight: 400;
`;

const Hamburger = styled.div`
  /* Icon 3 */
  display: flex;
  margin-left: 10px;
  margin-top:5px;
  height: 100%;
  /* border: 0.2px ${props => props.theme.black} solid;
  border-radius: 5px; */
  flex-direction: column;
  justify-content: center;

  #nav-icon3 {
    width: 30px;
    height: 30px;
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
    height: 4px;
    width: 100%;
    background: ${props => props.theme.black};
    /* border-radius: 7px; */
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
  i {
    font-size: 20px;
    margin-left: 5px;
  }

  width: 100%;
  height: 50px;
  background-color: ${props => props.theme.grey};
  display: flex;
  flex-direction: row;

  @media only screen and (min-width: ${mobileBreakpoint}px) {
    display: none;
  }
`;

const HamburgerBar = props => {
  return (
    <HamburgerBarStyle>
      <Hamburger>
        <div
          id="nav-icon3"
          onClick={() => {
            const hamburger = document.querySelector("#nav-icon3");
            let open = false;
            for (let i = 0; i < hamburger.classList.length; i++) {
              if (hamburger.classList[i] === "open") {
                open = true;
              }
            }
            if (open) {
              document.querySelector("#nav-icon3").classList.remove("open");
            } else {
              document.querySelector("#nav-icon3").classList.add("open");
            }
            props.toggleSidebar();
          }}
        >
          <span />
          <span />
          <span />
          <span />
        </div>
      </Hamburger>
      <Flex>
        <VerticalCenter>
          <i class="fa fa-angle-right" />
        </VerticalCenter>
        <SectionTitle>{props.activeSection}</SectionTitle>
      </Flex>
    </HamburgerBarStyle>
  );
};

export default HamburgerBar;
