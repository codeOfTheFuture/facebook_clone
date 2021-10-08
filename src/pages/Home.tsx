import React, { useContext } from "react";
import Header from "../components/Header";
import Main from "../components/Main";
import { AuthContext } from "../context/AuthContext";

const Home: React.FC = () => {
  const user = useContext(AuthContext);
  console.log(user);
  return (
    <div data-test='page-home'>
      <Header />
      <Main />
    </div>
  );
};

export default Home;
