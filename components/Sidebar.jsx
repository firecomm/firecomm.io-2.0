import Link from "next/link";
import styled from "styled-components";

import Section from "./Section";

import { mobileBreakpoint } from "../constants";

const SidebarStyled = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  margin-bottom: 10px;
  width: 100%;
  font-size: 7.5px;
  font-weight: 400;
  color: ${props => props.theme.black};
  background-color: ${props => props.theme.white};

  :hover {
    cursor: pointer;
  }

  @media only screen and (min-width: ${mobileBreakpoint}px) {
    width: 25%;
    max-width: 250px;
  }
`;

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      test: true
    };
  }

  render() {
    if (
      this.props.windowWidth < mobileBreakpoint &&
      !this.props.sidebarActive
    ) {
      return null;
    } else {
      return (
        <SidebarStyled>
          {this.props.sections.map((el, index) => {
            return (
              <Section
                toggle={section => this.props.toggleSection(section)}
                key={`section-${index}`}
                {...el}
                activeSection={this.props.activeSection}
                changeActiveSection={section =>
                  this.props.changeActiveSection(section)
                }
              />
            );
          })}
        </SidebarStyled>
      );
    }
  }
}

export default Sidebar;
