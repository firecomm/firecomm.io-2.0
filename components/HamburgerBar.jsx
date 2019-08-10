import styled from "styled-components";
import { loadGetInitialProps } from "next-server/dist/lib/utils";

const HamburgerBarStyle = styled.div`
  width: 100%;
  height: 50px;
  background-color: ${props => props.theme.darkMainColor};
  display: flex;

  @media only screen and (min-width: 480px) {
    display: none;
  }
`;

const HamburgerBar = props => {
  return (
    <HamburgerBarStyle>
      <button onClick={props.toggleSidebar}>Toggle me</button>
      <h1>{props.activeSection}</h1>
    </HamburgerBarStyle>
  );
};

export default HamburgerBar;
