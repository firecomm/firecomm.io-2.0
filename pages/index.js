import styled from "styled-components";

import LandingPage from "../components/LandingPage";

const CardDiv = styled.div`
  background-color: black;
`;

import HomeLayout from "../layouts/HomeLayout";

function Home() {
  return (
    <HomeLayout>
      <LandingPage />
    </HomeLayout>
  );
}

export default Home;
