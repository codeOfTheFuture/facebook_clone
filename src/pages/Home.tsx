import React from "react";
import Header from "../components/Header";
import Main from "../components/Main";
import { useAuth } from "../context/AuthContext";

const Home: React.FC = () => {
  const { darkModeEnabled } = useAuth();

  return (
    <div
      className={`h-screen bg-gray-100 overflow-hidden ${darkModeEnabled && "dark"
        }`}
    >
      <Header />
      <Main />
    </div>
  );
};

export default Home;
