import React from "react";
import { SearchIcon } from "@heroicons/react/outline";
import { DotsHorizontalIcon, VideoCameraIcon } from "@heroicons/react/solid";

import { contacts } from "../data/widgetsData";

const Widgets: React.FC = () => {
  return (
    <div className='hidden lg:flex flex-col w-60 p-2 mt-5'>
      <div className='flex justify-between items-center text-gray-500 mb-5'>
        <h2 className='text-xl'>Contacts</h2>
        <div className='flex space-x-2'>
          <VideoCameraIcon height={15} />
          <SearchIcon height={15} />
          <DotsHorizontalIcon height={15} />
        </div>
      </div>
    </div>
  );
};

export default Widgets;
