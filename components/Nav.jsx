import Link from "next/link";

const Nav = () => {
  return (
    <div id="navigation-bar">
      <Link href="/">Home</Link>
      <Link href="/docs">Docs</Link>
      <Link href="/guides">Guides</Link>
      <Link href="/team">Team</Link>
    </div>
  );
};

export default Nav;
