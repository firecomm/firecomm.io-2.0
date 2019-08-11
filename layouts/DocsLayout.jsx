import Link from "next/link";
import Head from "next/head";
import styled from "styled-components";

import Nav from "../components/Nav";
import HamburgerBar from "../components/HamburgerBar";
import Sidebar from "../components/Sidebar";

import { FlexWrap } from "../styles/styles";

import { mobileBreakpoint } from "../constants";

const PageContainer = styled.section`
  display: flex;
  flex-direction: row;
  width: ${props => (props.big ? "100%" : "75%")};
`;

const MarkdownStyles = styled.div`
  padding-left: 20px;
  padding-right: 20px;
  width: 90%;

  @media only screen and (min-width: ${mobileBreakpoint}px) {
    width: 60%;
  }
  /*!
* Agate by Taufik Nurrohman <https://github.com/tovic>
* ----------------------------------------------------
*
* #ade5fc
* #a2fca2
* #c6b4f0
* #d36363
* #fcc28c
* #fc9b9b
* #ffa
* #fff
* #333
* #62c8f3
* #888
*
*/

  .hljs {
    display: block;
    overflow-x: auto;
    padding: 0.5em;
    background: #333;
    color: white;
  }

  .hljs-name,
  .hljs-strong {
    font-weight: bold;
  }

  .hljs-code,
  .hljs-emphasis {
    font-style: italic;
  }

  .hljs-tag {
    color: #62c8f3;
  }

  .hljs-variable,
  .hljs-template-variable,
  .hljs-selector-id,
  .hljs-selector-class {
    color: #ade5fc;
  }

  .hljs-string,
  .hljs-bullet {
    color: #a2fca2;
  }

  .hljs-type,
  .hljs-title,
  .hljs-section,
  .hljs-attribute,
  .hljs-quote,
  .hljs-built_in,
  .hljs-builtin-name {
    color: #ffa;
  }

  .hljs-number,
  .hljs-symbol,
  .hljs-bullet {
    color: #d36363;
  }

  .hljs-keyword,
  .hljs-selector-tag,
  .hljs-literal {
    color: #fcc28c;
  }

  .hljs-comment,
  .hljs-deletion,
  .hljs-code {
    color: #888;
  }

  .hljs-regexp,
  .hljs-link {
    color: #c6b4f0;
  }

  .hljs-meta {
    color: #fc9b9b;
  }

  .hljs-deletion {
    background-color: #fc9b9b;
    color: #333;
  }

  .hljs-addition {
    background-color: #a2fca2;
    color: #333;
  }

  .hljs a {
    color: inherit;
  }

  .hljs a:focus,
  .hljs a:hover {
    color: inherit;
    text-decoration: underline;
  }
`;

class DocsLayout extends React.Component {
  constructor() {
    super();
    this.state = {
      sidebarActive: true,
      windowWidth: mobileBreakpoint,
      activeSection: "Getting Started"
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
          activeSection={this.state.activeSection}
          toggleSidebar={() => this.toggleSidebar()}
        />
        <FlexWrap>
          <Sidebar
            windowWidth={this.state.windowWidth}
            sidebarActive={this.state.sidebarActive}
            changeActiveSection={section => this.changeActiveSection(section)}
          />
          {this.state.sidebarActive &&
          this.state.windowWidth <= mobileBreakpoint ? null : (
            <MarkdownStyles>
              <div class="page-body">{this.props.children}</div>
            </MarkdownStyles>
          )}
        </FlexWrap>
      </>
    );
  }
}

export default DocsLayout;
