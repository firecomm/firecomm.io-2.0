import HomeLayout from "../layouts/HomeLayout";

function Home({ children }) {
  return (
    <HomeLayout>
      <div>Welcome to Next.js!</div>
      {children}
    </HomeLayout>
  );
}

export default Home;
