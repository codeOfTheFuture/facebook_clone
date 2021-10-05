import React from "react";
import HeaderLeft from "./HeaderLeft";

const Header: React.FC = () => {
  return (
    <div data-test='component-header'>
      <HeaderLeft />
      {/* Center */}

      {/* Right */}
    </div>
  );
};

export default Header;
