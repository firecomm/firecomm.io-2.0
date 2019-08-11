import Link from "next/link";

const NavCore = () => {
  return (
    <>
      <Link>
        <a href="/docs/intro/gettingStarted">Getting Started</a>
      </Link>
      <Link>
        <a href="/docs/intro/gettingStarted">API</a>
      </Link>
      <Link href="/guides">
        <a href="/guides">Guides</a>
      </Link>
      <Link>
        <a href="https://github.com/oslabs-beta/firecomm">
          <i class="fa fa-github" />
        </a>
      </Link>
    </>
  );
};

export default NavCore;
