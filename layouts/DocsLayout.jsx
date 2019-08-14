import Link from "next/link";
import Head from "next/head";
import styled from "styled-components";

import Nav from "../components/Nav";
import HamburgerBar from "../components/HamburgerBar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

import { FlexRow } from "../styles/styles";

import { mobileBreakpoint } from "../constants";

const PageContainer = styled.section`
  display: flex;
  flex-direction: row;
  width: ${props => (props.big ? "100%" : "75%")};
`;

const MarkdownStyles = styled.div`
  padding-left: 20px;
  padding-right: 20px;
  width: 75%;

  @media only screen and (min-width: ${mobileBreakpoint}px) {
    width: 60%;
  }
`;

class DocsLayout extends React.Component {
  constructor(props) {
    super(props);
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
    this.state = {
      sidebarActive: false,
      windowWidth: mobileBreakpoint,
      activeSection: "Getting Started",
      sections,
      linksArray
    };
  }

  handleResize() {
    this.setState(state => {
      console.log("resize");
      return { windowWidth: window.innerWidth };
    });
  }

  changeActiveSection(section) {
    console.log(section);
    this.setState(state => {
      return { activeSection: section };
    });
  }

  componentDidMount() {
    window.addEventListener("resize", this.handleResize.bind(this));
    this.setState(state => {
      return { windowWidth: window.innerWidth };
    });
  }

  toggleSidebar() {
    this.setState(
      state => {
        let sidebarActive = this.state.sidebarActive;
        sidebarActive = !sidebarActive;
        return { sidebarActive };
      },
      () => console.log("sidebaractive", this.state.sidebarActive)
    );
  }

  render() {
    return (
      <>
        <Head />
        <Nav windowWidth={this.state.windowWidth} />
        <HamburgerBar
          sidebarActive={this.state.sidebarActive}
          activeSection={this.props.subsection}
          toggleSidebar={() => this.toggleSidebar()}
        />
        <FlexRow>
          <Sidebar
            windowWidth={this.state.windowWidth}
            activeSection={this.props.subsection}
            sections={this.state.sections}
            sidebarActive={this.state.sidebarActive}
            changeActiveSection={section => this.changeActiveSection(section)}
          />
          {this.state.sidebarActive &&
          this.state.windowWidth <= mobileBreakpoint ? null : (
            <MarkdownStyles>
              <div class="page-body">{this.props.children}</div>
            </MarkdownStyles>
          )}
        </FlexRow>
        <Footer />
      </>
    );
  }
}

export default DocsLayout;
