import Link from "next/link";
import Head from "next/head";

import Nav from "../components/Nav";

const HomeLayout = ({ children }) => {
  return (
    <>
      <Head />
      <Nav />
      <div class="page-body">{children}</div>
    </>
  );
};

export default HomeLayout;
