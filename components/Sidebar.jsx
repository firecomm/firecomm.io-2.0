import Link from "next/link";
import styled from "styled-components";

import Section from "./Section";

import { mobileBreakpoint } from "../constants";

const SidebarStyled = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
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
  constructor() {
    super();
    this.state = {
      test: true,
      sections: [
        {
          title: "Getting Started",
          collapsed: false,
          subsections: ["Intro","Concepts","Code Walkthrough"]
        },
        {
          title: "Core",
          collapsed: false,
          subsections: ["Server","Stub","Build","ServerCalls","StubCalls"]
        },
        {
          title: "Extensions",
          collapsed: false,
          subsections: ["Middleware","Error Handling","Metadata","Interceptors"]
        },
        // {
        //   title: "Guides",
        //   collapsed: false,
        //   subsections: ["Authentication","Tracing"]
        // },
        {
          title:"API Reference",
          collapsed: false,
          subsections: []
        },
        // {
        //   title:"gRPC",
        //   collapsed: false,
        //   subsections: []
        // },
        // {
        //   title:"Protobuf",
        //   collapsed: false,
        //   subsections: []
        // }
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
    if (
      this.props.windowWidth < mobileBreakpoint &&
      !this.props.sidebarActive
    ) {
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
