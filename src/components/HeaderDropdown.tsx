import React from "react";
import HeaderDropdownAccount from "./HeaderDropdownAccount";


const HeaderDropdown: React.FC = () => {
  return (
    <div className='absolute inline-block top-10 mt-2 right-0 p-2 border border-gray-200 bg-white rounded-lg shadow-lg z-10'>
      <HeaderDropdownAccount />
    </div>
  );
};

export default HeaderDropdown;
