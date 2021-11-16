import React from "react";
import Feed from "./Feed";
import Sidebar from "./Sidebar";
import Widgets from "./Widgets";

const Main: React.FC = () => {
  return (
    <main className='flex dark:bg-gray-800' data-test='component-main'>
      <Sidebar />
      <Feed />
      <Widgets />
    </main>
  );
};

export default Main;
