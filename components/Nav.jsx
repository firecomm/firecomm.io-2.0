import Link from "next/link";

const Nav = () => {
  return (
    <div id="navigation-bar">
      <Link href="/">Home</Link>
      <Link>
        <a href="/docs/intro/gettingStarted">Docs</a>
      </Link>
      <Link href="/guides">Guides</Link>
      <Link href="/team">Team</Link>
    </div>
  );
};

export default Nav;
