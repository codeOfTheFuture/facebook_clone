import React, { useState } from "react";
import {
  BellIcon,
  ChatIcon,
  ChevronDownIcon,
  ViewGridIcon,
  MenuIcon,
} from "@heroicons/react/solid";
import { useAuth } from "../context/AuthContext";
import { useHistory } from "react-router-dom";
import HeaderIcon from "./HeaderIcon";

const HeaderRight: React.FC = () => {
  const { user, logOut } = useAuth();
  const history = useHistory();
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);

  const handleLogOut = async () => {
    try {
      await logOut();
      history.push("/login");
    } catch (error) {
      console.log(error);
    }
  };

  const handleClick = () => {
    setDropdownOpen((prevState) => !prevState);
  }

  return (
    <div
      className='flex items-center sm:space-x-2 justify-end'
      data-test='component-header-right'
    >
      <HeaderIcon
        Icon={MenuIcon}
        iconClassName={"menuIcon"}
        iconContainerClassName={"menuIconContainer"}
        tooltipClassName={'toolTipCenter'}
        tooltipName={'Home'}
      />

      <div className='flex items-center sm:space-x-2 p-1 hover:bg-gray-200 rounded-full cursor-pointer'>
        <img
          src={user.photoURL}
          alt=''
          width={30}
          height={30}
          className='rounded-full'
          onClick={handleLogOut}
        />

        <p className='whitespace-nowrap font-semibold pr-3'>
          {user.displayName.split(" ")[0]}
        </p>
      </div>

      <HeaderIcon Icon={ViewGridIcon} iconClassName={"headerIconRight"} tooltipClassName={'toolTipMenu'} tooltipName={'Menu'} />
      <HeaderIcon Icon={ChatIcon} iconClassName={"headerIconRight"} tooltipClassName={'toolTipMessenger'} tooltipName={'Messenger'} />
      <HeaderIcon Icon={BellIcon} iconClassName={"headerIconRight"} tooltipClassName={'toolTipNotifications'} tooltipName={'Notifications'} />
      <HeaderIcon Icon={ChevronDownIcon} iconClassName={"headerIconRight"}
        tooltipClassName={'toolTipAccount'} tooltipName={'Account'}
        handleClick={handleClick} dropdownOpen={dropdownOpen}
      />
    </div>
  );
};

export default HeaderRight;
