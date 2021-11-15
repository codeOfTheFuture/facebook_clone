import React, { useState, useRef } from "react";
import HeaderProfileBtn from "./HeaderProfileBtn";
import {
  BellIcon,
  ChatIcon,
  ChevronDownIcon,
  ViewGridIcon,
  MenuIcon,
} from "@heroicons/react/solid";
import HeaderIcon from "./HeaderIcon";
import HeaderDropdownAccount from "./HeaderDropdownAccount";
import { useAuth } from "../context/AuthContext";
import useClickOutside from "../hooks/useClickOutside";

const HeaderRight: React.FC = () => {
  const { user } = useAuth();
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);
  const iconRef = useRef<any>(null);

  const handleClick = () => {
    setDropdownOpen((prevState) => !prevState);
  };

  useClickOutside(iconRef, () => {
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

      <HeaderProfileBtn
        photoURL={user.photoURL}
        displayName={user.displayName}
      />

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
        handleClick={handleClick}
      />
      <HeaderIcon
        Icon={ChevronDownIcon}
        iconClassName={"headerIconRight"}
        tooltipName={"Account"}
        handleClick={handleClick}
        dropdownOpen={dropdownOpen}
        iconRef={iconRef}
        Dropdown={HeaderDropdownAccount}
      />
    </div>
  );
};

export default HeaderRight;
