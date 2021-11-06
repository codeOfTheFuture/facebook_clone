import React, { useState, useRef } from "react";
import {
  BellIcon,
  ChatIcon,
  ChevronDownIcon,
  ViewGridIcon,
  MenuIcon,
} from "@heroicons/react/solid";
import HeaderIcon from "./HeaderIcon";
import { useAuth } from "../context/AuthContext";
import useClickOutside from "../hooks/useClickOutside";

const HeaderRight: React.FC = () => {
  const { user } = useAuth();
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);
  const dropdownRef = useRef<any>(null);



  const handleClick = () => {
    setDropdownOpen((prevState) => !prevState);
  };

  useClickOutside(dropdownRef, () => {
    setDropdownOpen(false);
  });

  return (
    <div
      className='flex items-center sm:space-x-2 justify-end'
      data-test='component-header-right'
    >
      <HeaderIcon
        Icon={MenuIcon}
        iconClassName={"menuIcon"}
        iconContainerClassName={"menuIconContainer"}
        tooltipClassName={"toolTipCenter"}
        tooltipName={"Home"}
      />

      <div className='flex items-center sm:space-x-2 p-1 hover:bg-gray-200 rounded-full cursor-pointer'>
        <img
          src={user.photoURL}
          alt=''
          width={30}
          height={30}
          className='rounded-full'
        />

        <p className='whitespace-nowrap font-semibold pr-3'>
          {user.displayName.split(" ")[0]}
        </p>
      </div>

      <HeaderIcon
        Icon={ViewGridIcon}
        iconClassName={"headerIconRight"}
        tooltipName={"Menu"}
      />
      <HeaderIcon
        Icon={ChatIcon}
        iconClassName={"headerIconRight"}
        tooltipName={"Messenger"}
      />
      <HeaderIcon
        Icon={BellIcon}
        iconClassName={"headerIconRight"}
        tooltipName={"Notifications"}
      />
      <HeaderIcon
        Icon={ChevronDownIcon}
        iconClassName={"headerIconRight"}
        tooltipName={"Account"}
        handleClick={handleClick}
        dropdownOpen={dropdownOpen}
        dropdownRef={dropdownRef}
      />
    </div>
  );
};

export default HeaderRight;
