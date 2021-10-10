import React from "react";
import {
  BellIcon,
  ChatIcon,
  ChevronDownIcon,
  ViewGridIcon,
} from "@heroicons/react/solid";
import { useAuth } from "../context/AuthContext";
import { useHistory } from "react-router-dom";

const HeaderRight: React.FC = () => {
  const { user, logOut } = useAuth();
  const history = useHistory();

  const handleLogOut = async () => {
    try {
      await logOut();
      history.push("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      className='flex items-center sm:space-x-2 justify-end'
      data-test='component-header-right'
    >
      {/* Profile Pic */}
      <img
        src={user.photoURL}
        alt=''
        width={40}
        height={40}
        className='rounded-full cursor-pointer'
        onClick={handleLogOut}
      />

      <p className='whitespace-nowrap font-semibold pr-3'>{user.displayName}</p>

      <ViewGridIcon className='icon' />
      <ChatIcon className='icon' />
      <BellIcon className='icon' />
      <ChevronDownIcon className='icon' />
    </div>
  );
};

export default HeaderRight;
