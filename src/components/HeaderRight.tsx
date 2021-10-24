import React, { useEffect } from "react";
import {
  BellIcon,
  ChatIcon,
  ChevronDownIcon,
  ViewGridIcon,
} from "@heroicons/react/solid";
import { useAuth } from "../context/AuthContext";
import { useHistory } from "react-router-dom";
import HeaderIcon from "./HeaderIcon";

const HeaderRight: React.FC = () => {
  const { user, logOut } = useAuth();
  const history = useHistory();

  useEffect(() => {
    const getProfilePic = async () => {
      const response = await fetch(
        `${user.photoURL}?&access_token=${user.accessToken}`
      );
      const data = await response.json();
      console.log(data);
    };
    getProfilePic();
  }, [user.accessToken, user.photoURL]);

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

      <HeaderIcon Icon={ViewGridIcon} iconClassName={"headerIconRight"} />
      <HeaderIcon Icon={ChatIcon} iconClassName={"headerIconRight"} />
      <HeaderIcon Icon={BellIcon} iconClassName={"headerIconRight"} />
      <HeaderIcon Icon={ChevronDownIcon} iconClassName={"headerIconRight"} />

      {/* <ViewGridIcon className='headerIconRight' />
      <ChatIcon className='headerIconRight' />
      <BellIcon className='headerIconRight' />
      <ChevronDownIcon className='headerIconRight' /> */}
    </div>
  );
};

export default HeaderRight;
