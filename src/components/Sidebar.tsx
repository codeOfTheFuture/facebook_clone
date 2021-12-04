import React from "react";
import { useAuth } from "../context/AuthContext";
import { useUserProfile } from "../context/UserProfileContext";
import SidebarRow from "./SidebarRow";
import {
  ChevronDownIcon,
  ShoppingBagIcon,
  UserGroupIcon,
} from "@heroicons/react/outline";
import {
  CalendarIcon,
  ClockIcon,
  DesktopComputerIcon,
  UsersIcon,
} from "@heroicons/react/solid";

const Sidebar: React.FC = () => {
  const { user } = useAuth();
  const { photoURL } = useUserProfile();

  return (
    <div className='p-2 mt-5 max-w-[600px] xl:min-w-[300px]'>
      {photoURL && <SidebarRow src={photoURL} title={user.displayName} />}
      <SidebarRow Icon={UsersIcon} title='Friends' />
      <SidebarRow Icon={UserGroupIcon} title='Groups' />
      <SidebarRow Icon={ShoppingBagIcon} title='Marketplace' />
      <SidebarRow Icon={DesktopComputerIcon} title='Watch' />
      <SidebarRow Icon={CalendarIcon} title='Events' />
      <SidebarRow Icon={ClockIcon} title='Memories' />
      <SidebarRow Icon={ChevronDownIcon} title='See More' />
    </div>
  );
};

export default Sidebar;
