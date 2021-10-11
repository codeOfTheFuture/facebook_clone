import React from "react";
import Feed from "./Feed";
import Sidebar from "./Sidebar";

const Main: React.FC = () => {
  return (
    <main className='flex' data-test='component-main'>
      <Sidebar />
      <Feed />
      {/*  Widgets  */}
    </main>
  );
};

export default Main;
