import React from "react";
import Header from "../components/Header";
import Main from "../components/Main";
import { useAuth } from "../context/AuthContext";

const Home: React.FC = () => {
  const user = useAuth();
  console.log(user);
  return (
    <div data-test='page-home'>
      <Header />
      <Main />
    </div>
  );
};

export default Home;
