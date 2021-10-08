import React from "react";
import Header from "../components/Header";
import Main from "../components/Main";

const Home: React.FC = () => {
  return (
    <div data-test='page-home'>
      <Header />
      <Main />
    </div>
  );
};

export default Home;
