import styled from "styled-components";

import { mobileBreakpoint } from "../constants";

const FooterSection = styled.div`
  width: 100%;
  padding: 0 10px 0 10px;
  display: flex;
  flex-direction: column;

  h5 {
    font-size: 15px;
    margin: 10px 0 10px 0;
  }

  a {
    font-weight: 400;
  }

  @media only screen and (min-width: ${mobileBreakpoint}px) {
    width: 150px;
  }
`;

const Bumper = styled.section`
  width: 100%;
  font-size: 15px;
  text-align: center;
  font-weight: 100;
  justify-content: center;
  padding: 0 25% 0 25%;
`;

const FooterStyles = styled.section`
  padding: 15px 0 0 0;
  width: 100%;
  min-height: 250px;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  background-color: ${props => props.theme.black};
  color: ${props => props.theme.white};
`;

const Footer = props => {
  return (
    <FooterStyles>
      <FooterSection>
        <h5>
          <strong>Docs</strong>
        </h5>
        <h5>
          <a href={`/docs/gettingstarted/intro`}>Getting Started</a>
        </h5>
        <h5>
          <a href={`/docs/core/overview`}>Overview</a>
        </h5>
        <h5>
          <a href={`/docs/extensions/middleware`}>Middleware</a>
        </h5>
      </FooterSection>
      <FooterSection>
        <h5>
          <strong>API Reference</strong>
        </h5>
        <h5>
          <a href="/docs/core/server">Server</a>
        </h5>
        <h5>
          <a href="/docs/core/stub">Stub</a>
        </h5>
        <h5>
          <a href="/docs/core/build">Build</a>
        </h5>
      </FooterSection>
      <FooterSection>
        <h5>
          <strong>More</strong>
        </h5>
        <h5>
          <a href="https://github.com/firecomm/firecomm">Github</a>
        </h5>
      </FooterSection>
      <Bumper>
        Copyright (c) 2019-present Ian Geckeler, Daniel Nagano-Gerace, Giuseppe
        Valentino, and Dmitriy Levy. Icons credit to Font Awesome and the Noun
        Project.
      </Bumper>
    </FooterStyles>
  );
};

export default Footer;
