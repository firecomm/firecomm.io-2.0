import styled from "styled-components";

const CardDiv = styled.div`
  background-color: black;
`;

import HomeLayout from "../layouts/HomeLayout";

function Home() {
  return (
    <HomeLayout>
      <div>Welcome to Next.js!</div>
    </HomeLayout>
  );
}

export default Home;
