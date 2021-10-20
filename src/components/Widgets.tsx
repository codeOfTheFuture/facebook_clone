import React from "react";
import Contact from "./Contact";
import { SearchIcon } from "@heroicons/react/outline";
import { DotsHorizontalIcon, VideoCameraIcon } from "@heroicons/react/solid";

import { contacts } from "../data/widgetsData";

const Widgets: React.FC = () => {
  return (
    <div className='hidden lg:flex flex-col w-60 p-3 mt-5'>
      <div className='flex justify-between items-center text-gray-500 mb-5'>
        <h2 className='text-xl'>Contacts</h2>
        <div className='flex space-x-2'>
          <VideoCameraIcon className='cursor-pointer' height={15} />
          <SearchIcon className='cursor-pointer' height={15} />
          <DotsHorizontalIcon className='cursor-pointer' height={15} />
        </div>
      </div>

      {contacts.map((contact) => (
        <Contact key={contact.id} src={contact.src} name={contact.name} />
      ))}
    </div>
  );
};

export default Widgets;
