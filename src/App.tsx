import React from "react";
import Header from "./components/Header";
import "./App.css";

const App: React.FC = () => {
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
