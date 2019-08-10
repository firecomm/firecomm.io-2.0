import Link from "next/link";
import Head from "next/head";

import Nav from "../components/Nav";
import HamburgerBar from "../components/HamburgerBar";
import Sidebar from "../components/Sidebar";

class HomeLayout extends React.Component {
  constructor() {
    super();
    this.state = {
      sidebarActive: true,
      windowWidth: 480
    };
  }

  handleResize() {
    this.setState(state => {
      console.log("resize");
      return { windowWidth: window.innerWidth };
    });
  }

  componentDidMount() {
    window.addEventListener("resize", this.handleResize.bind(this));
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
        <div class="page-body">{this.props.children}</div>
      </>
    );
  }
}

export default HomeLayout;
