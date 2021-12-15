import React, {
  useState,
  useRef,
  ComponentType,
  SVGProps,
} from "react";
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
import useClickOutside from "../hooks/useClickOutside";

const HeaderRight: React.FC = () => {
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);
  const iconRef =
    useRef<ComponentType<SVGProps<SVGSVGElement>>>(null);

  const handleClick = (): void => {
    setDropdownOpen((prevState) => !prevState);
  };

  useClickOutside(iconRef, (): void => {
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

      <HeaderProfileBtn />

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
