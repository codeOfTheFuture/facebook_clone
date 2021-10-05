import React from "react";
import HeaderInput from "./HeaderInput";

import { SearchIcon } from "@heroicons/react/outline";

const HeaderSearch: React.FC = () => {
  return (
    <div
      className='flex ml-2 items-center rounded-full bg-gray-100 p-2'
      data-test='component-header-search'
    >
      <SearchIcon className='h-6 text-gray-600' />
      <HeaderInput />
    </div>
  );
};

export default HeaderSearch;
