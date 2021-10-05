import React from "react";
import HeaderLogo from "./HeaderLogo";
import HeaderSearch from "./HeaderSearch";

const HeaderLeft: React.FC = () => {
  return (
    <div className='flex items-center' data-test='component-header-left'>
      <HeaderLogo />
      <HeaderSearch />
    </div>
  );
};

export default HeaderLeft;
