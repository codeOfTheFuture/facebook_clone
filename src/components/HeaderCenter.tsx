import React from "react";
import { HomeIcon, UserGroupIcon } from "@heroicons/react/solid";
import { FlagIcon, PlayIcon, ShoppingCartIcon } from "@heroicons/react/outline";
import HeaderIcon from "./HeaderIcon";

const HeaderCenter: React.FC = () => {
  return (
    <div className='flex justify-center flex-grow'>
      <div className='flex space-x-6 md:space-x-2'>
        <HeaderIcon Icon={HomeIcon} active={true} />
        <HeaderIcon Icon={FlagIcon} active={false} />
        <HeaderIcon Icon={PlayIcon} active={false} />
        <HeaderIcon Icon={ShoppingCartIcon} active={false} />
        <HeaderIcon Icon={UserGroupIcon} active={false} />
      </div>
    </div>
  );
};

export default HeaderCenter;
