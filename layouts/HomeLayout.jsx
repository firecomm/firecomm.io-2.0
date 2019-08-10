import Link from "next/link";
import Head from "next/head";

import Nav from "../components/Nav";
import Sidebar from "../components/Sidebar";

const HomeLayout = ({ children }) => {
  return (
    <>
      <Head />
      <Nav />
      <Sidebar />
      <div class="page-body">{children}</div>
    </>
  );
};

export default HomeLayout;
