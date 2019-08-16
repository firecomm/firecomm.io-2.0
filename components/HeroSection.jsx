import styled from "styled-components";
import { HorizontalCenter, VerticalCenter } from "../styles/styles";

import { mobileBreakpoint } from "../constants";

const LogoFlex = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

const HeroFlex = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: center;
`;

const HeroTitle = styled.h3`
  text-align: center;
  margin: 0 0 0 15px;
  color: ${props => props.theme.mainColor};
  padding-top: 10px;
  font-size: 50px;

  @media only screen and (min-width: ${mobileBreakpoint}px) {
    padding-top: 10px;
    font-size: 65px;
  }
`;

const HeroColumn = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

const HeroSubtitle = styled.h3`
  text-align: center;
  font-size: 27.5px;
  padding-left: 5px;
  padding-right: 5px;
  color: ${props => props.theme.black};
`;

const GetStartedButton = styled.button`
  width: 270px;
  height: 80px;
  padding: 20px;
  font-size: 30px;
  font-weight: 700;
  color: ${props => props.theme.white};
  background-color: ${props => props.theme.mainColor};
  border: 1px solid ${props => props.theme.white};
  border-radius: 4px;

  :hover {
    color: ${props => props.theme.mainColor} !important;
    cursor: pointer;
    background-color: ${props => props.theme.white};
    border: 2px solid ${props => props.theme.mainColor};
  }

  @media only screen and (min-width: ${mobileBreakpoint}px) {
    width: 270px;
    height: 70px;
    font-size: 30px;
  }
`;

const HeroSection = () => {
  return (
    <HeroFlex>
      <HeroColumn>
        <LogoFlex>
          <VerticalCenter>
            <img src="/static/assets/logo.png" width="80px" height="100px" />
          </VerticalCenter>
          <VerticalCenter>
            <HeroTitle>Firecomm</HeroTitle>
          </VerticalCenter>
        </LogoFlex>
        <HeroSubtitle>
          A complete framework for gRPC-node engineers.
        </HeroSubtitle>
        <a href="/docs/gettingstarted/intro">
          <GetStartedButton>GET STARTED</GetStartedButton>
        </a>
      </HeroColumn>
    </HeroFlex>
  );
};

export default HeroSection;
