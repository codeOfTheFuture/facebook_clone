import React from "react";
import {
  BellIcon,
  ChatIcon,
  ChevronDownIcon,
  ViewGridIcon,
} from "@heroicons/react/solid";

const HeaderRight: React.FC = () => {
  return (
    <div
      className='flex items-center sm:space-x-2 justify-end'
      data-test='component-header-right'
    >
      {/* Profile Pic */}

      <p className='whitespace-nowrap font-semibold pr-3'>Jeff Oliver</p>

      <ViewGridIcon className='icon' />
      <ChatIcon className='icon' />
      <BellIcon className='icon' />
      <ChevronDownIcon className='icon' />
    </div>
  );
};

export default HeaderRight;
