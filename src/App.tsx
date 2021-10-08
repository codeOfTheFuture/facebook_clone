import React, { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import Header from "./components/Header";
import "./App.css";

const App: React.FC = () => {
  const user = useContext(AuthContext);

  return (
    <div className='App' data-test='component-app'>
      <Header />

      <main>
        {/*  Sidebar  */}
        {/*  Feed  */}
        {/*  Widgets  */}
      </main>
    </div>
  );
};

export default App;
