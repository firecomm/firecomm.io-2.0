import styled from "styled-components";

import SellingPoint from "./SellingPoint";
import HeroSection from "./HeroSection";
import { mobileBreakpoint } from "../constants";

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
  background-color: brown;

  @media only screen and (min-width: ${mobileBreakpoint}px) {
    flex-direction: row;
  }
`;

const sellingPointTitles = [
  "Easy to reason about",
  "Fully featured",
  "Improved functionality"
];
const sellingPointContent = [
  "With a Unified, lightweight syntax that enables you to get up and running with any type of call",
  "All classes are extensions of gRPC’s core classes, allowing you to access all advanced functionality, from retry configuration to service registration.",
  "Built-in Health-check service, improved server-side error handling, client interceptors, and pluggable middleware. "
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
    </LPWrapper>
  );
};

export default LandingPage;
