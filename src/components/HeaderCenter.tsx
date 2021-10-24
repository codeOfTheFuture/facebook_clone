import React from "react";
import { HomeIcon, UserGroupIcon } from "@heroicons/react/solid";
import { FlagIcon, PlayIcon, ShoppingCartIcon } from "@heroicons/react/outline";
import HeaderIcon from "./HeaderIcon";

const HeaderCenter: React.FC = () => {
  return (
    <div className='flex justify-center flex-grow'>
      <div className='flex space-x-6 md:space-x-2'>
        <HeaderIcon
          Icon={HomeIcon}
          iconClassName={"headerIconCenter"}
          iconContainerClassName={"headerIconContainer"}
          active
        />
        <HeaderIcon
          Icon={FlagIcon}
          iconClassName={"headerIconCenter"}
          iconContainerClassName={"headerIconContainer"}
        />
        <HeaderIcon
          Icon={PlayIcon}
          iconClassName={"headerIconCenter"}
          iconContainerClassName={"headerIconContainer"}
        />
        <HeaderIcon
          Icon={ShoppingCartIcon}
          iconClassName={"headerIconCenter"}
          iconContainerClassName={"headerIconContainer"}
        />
        <HeaderIcon
          Icon={UserGroupIcon}
          iconClassName={"headerIconCenter"}
          iconContainerClassName={"headerIconContainer"}
        />
      </div>
    </div>
  );
};

export default HeaderCenter;
