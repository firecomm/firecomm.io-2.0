import styled from "styled-components";

import SellingPoint from "./SellingPoint";
import { mobileBreakpoint } from "../constants";

const LPWrapper = styled.div`
  background-color: blue;
`;

const HeroSection = styled.section`
  background-color: red;
  display: flex;
  height: 350px;
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
      <HeroSection />
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
