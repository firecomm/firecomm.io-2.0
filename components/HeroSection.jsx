import styled from "styled-components";
import { HorizontalCenter } from "../styles/styles";

const LogoFlex = styled.div`
  display: flex;
`;

const HeroFlex = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: center;
`;

const HeroTitle = styled.h3`
  text-align: center;
  font-size: 40px;
  color: ${props => props.theme.mainColor};
`;

const HeroColumn = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

const HeroSubtitle = styled.h3`
  text-align: center;
  font-size: 22.5px;
  padding-left: 5px;
  padding-right: 5px;
  color: ${props => props.theme.black};
`;

const GetStartedButton = styled.button`
  width: 270px;
  height: 70px;
  font-size: 30px;
  font-weight: 700;
  color: ${props => props.theme.white};
  background-color: ${props => props.theme.mainColor};
  border: 1px solid ${props => props.theme.white};
  border-radius: 4px;

  :hover {
    color: ${props => props.theme.mainColor};
    cursor: pointer;
    background-color: ${props => props.theme.white};
    border: 2px solid ${props => props.theme.mainColor};
  }
`;

const HeroSection = () => {
  return (
    <HeroFlex>
      <HeroColumn>
        <LogoFlex>
          <HeroTitle>Firecomm</HeroTitle>
        </LogoFlex>
        <HeroSubtitle>
          A complete framework for gRPC-node engineers.
        </HeroSubtitle>
        <GetStartedButton>
          <a href="/docs/intro/gettingstarted">GET STARTED</a>
        </GetStartedButton>
      </HeroColumn>
    </HeroFlex>
  );
};

export default HeroSection;
