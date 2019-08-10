import Link from "next/link";
import styled from "styled-components";

import Section from "./Section";

const SidebarStyled = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  background-color: brown;

  @media only screen and (min-width: 480px) {
    width: 25%;
  }
`;

class Sidebar extends React.Component {
  constructor() {
    super();
    this.state = {
      test: true,
      sections: [
        {
          title: "Getting Started",
          collapsed: false,
          subsections: ["intro", "about", "zeppy"]
        }
      ]
    };
  }

  toggleSection(section) {
    this.setState(state => {
      let sections = Object.assign(state.sections);
      for (let i = 0; i < sections.length; i++) {
        if (sections[i].title === section) {
          sections[i].collapsed = !state.sections[i].collapsed;
          return { sections };
        }
      }
    });
  }

  render() {
    console.log("window width", this.props.windowWidth);
    if (this.props.windowWidth < 480 && !this.props.sidebarActive) {
      return null;
    } else {
      return (
        <SidebarStyled>
          {this.state.sections.map((el, index) => {
            return (
              <Section
                toggle={section => this.toggleSection(section)}
                key={`section-${index}`}
                {...el}
                changeActiveSection={sections => this.props.changeActiveSection}
              />
            );
          })}
        </SidebarStyled>
      );
    }
  }
}

export default Sidebar;
