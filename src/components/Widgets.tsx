import React from "react";
import { SearchIcon } from "@heroicons/react/outline";
import { DotsHorizontalIcon, VideoCameraIcon } from "@heroicons/react/solid";

import { contacts } from "../data/widgetsData";
import Contacts from "./Contacts";

const Widgets: React.FC = () => {
  return (
    <div className='hidden lg:flex flex-col lg:w-80 p-3 mt-5'>
      <div className='flex justify-between items-center text-gray-500 mb-5'>
        <h2 className='text-xl dark:text-gray-200'>Contacts</h2>
        <div className='flex space-x-2'>
          <VideoCameraIcon
            className='cursor-pointer dark:text-gray-200'
            height={15}
          />
          <SearchIcon
            className='cursor-pointer dark:text-gray-200'
            height={15}
          />
          <DotsHorizontalIcon
            className='cursor-pointer dark:text-gray-200'
            height={15}
          />
        </div>
      </div>

      <Contacts contacts={contacts} />
    </div>
  );
};

export default Widgets;
