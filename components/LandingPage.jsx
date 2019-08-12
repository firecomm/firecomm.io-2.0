import styled from "styled-components";

import SellingPoint from "./SellingPoint";
import HeroSection from "./HeroSection";
import { mobileBreakpoint } from "../constants";
import { WhiteSpacer } from "../styles/styles";

const LPWrapper = styled.div`
  background-color: blue;
`;

const HeroSectionStyles = styled.section`
  background-color: ${props => props.theme.white};
  display: flex;
  height: 375px;
  h1 {
    font-weight: 700;
    font-size: 40px;
    color: ${props => props.theme.mainColor};
  }
`;

const SellingPoints = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  background-color: ${props => props.theme.white};

  @media only screen and (min-width: ${mobileBreakpoint}px) {
    flex-direction: row;
    background-color: ${props => props.theme.grey};
  }
`;

const sellingPointTitles = [
  "Intuitive",
  "Powerful",
  "Full-Featured",
  "Flexible"
];
const sellingPointContent = [
  "Enjoy a unified, lightweight syntax for more readable, maintainable code across all four gRPC call-types.",
  "Leverage built-in support for pluggable middleware,  health-check, SSL cert management, improved error handling, and interceptors.",
  "All classes extend gRPC’s core classes, allowing you to access all advanced functionality, from retry configuration to service registration.",
  "Incrementally adoptable. Use as many or as few of the core features as you like."
];

const LandingPage = () => {
  return (
    <LPWrapper>
      <HeroSectionStyles>
        <HeroSection />
      </HeroSectionStyles>
      <SellingPoints>
        {sellingPointTitles.map((title, index) => {
          return (
            <SellingPoint
              index={index}
              title={title}
              content={sellingPointContent[index]}
            />
          );
        })}
      </SellingPoints>
      <WhiteSpacer height="100" />
    </LPWrapper>
  );
};

export default LandingPage;
