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

  toggleSidebar(section) {
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
    console.log("class component rerender");
    return (
      <SidebarStyled>
        {this.state.sections.map((el, index) => {
          return (
            <Section
              toggle={section => this.toggleSidebar(section)}
              key={`section-${index}`}
              title={el.title}
              subsections={el.subsections}
              collapsed={el.collapsed}
            />
          );
        })}
      </SidebarStyled>
    );
  }
}

export default Sidebar;
