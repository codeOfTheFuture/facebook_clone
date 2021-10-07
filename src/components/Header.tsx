import React from "react";
import HeaderLeft from "./HeaderLeft";
import HeaderCenter from "./HeaderCenter";
import HeaderRight from "./HeaderRight";

const Header: React.FC = () => {
  return (
    <div
      className='sticky top-0 z-50 bg-white flex items-center p-2 lg:px-5 shadow-md'
      data-test='component-header'
    >
      <HeaderLeft />
      <HeaderCenter />
      <HeaderRight />
    </div>
  );
};

export default Header;
