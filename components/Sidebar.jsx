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
    const sections = [
      {
        title: "Getting Started",
        collapsed: false,
        subsections: ["Overview", "Concepts", "Intro"]
      },
      {
        title: "Core",
        collapsed: false,
        subsections: ["Build", "Server", "Server Calls", "Stub", "Stub Calls"]
      },
      {
        title: "Extensions",
        collapsed: false,
        subsections: ["Middleware", "Metadata", "Interceptors"]
      },
      // {
      //   title: "Guides",
      //   collapsed: false,
      //   subsections: ["Authentication","Tracing"]
      // },
      {
        title: "API Reference",
        collapsed: false,
        subsections: [
          "Build",
          "Package",
          "Server ClientStream Call",
          "Server DuplexCall",
          "Server Unary Call",
          "Server ServerStream Call",
          "Server",
          "Stub ClientStream Call",
          "Stub DuplexCall",
          "Stub Unary Call",
          "Stub ServerStream Call",
          "Stub"
        ]
      }
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
    ];
    const linksArray = [];
    for (let i = 0; i < sections.length; i++) {
      for (let j = 0; j < sections[i].subsections.length; j++) {
        const linkObject = {
          title: sections[i].subsections[j],
          link:
            "/docs/" +
            sections[i].title.toLowerCase().replace(" ", "") +
            "/" +
            sections[i].subsections[j].toLowerCase().replace(" ", "")
        };
        linksArray.push(linkObject);
      }
    }
    console.log(linksArray);
    this.state = {
      test: true,
      sections,
      linksArray
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
