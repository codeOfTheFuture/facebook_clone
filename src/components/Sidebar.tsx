import React from "react";
import { useAuth } from "../context/AuthContext";
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
  const { user, photoURL } = useAuth();
  // console.log(photoURL);

  return (
    <div className='p-2 mt-5 max-w-[600px] xl:min-w-[300px]'>
      <SidebarRow
        Icon={null}
        title={''}
        photoURL={photoURL}
        displayName={user?.displayName! && user.displayName}
      />
      <SidebarRow Icon={UsersIcon} title='Friends' photoURL={''}
        displayName={''} />
      <SidebarRow Icon={UserGroupIcon} title='Groups' photoURL={''}
        displayName={''} />
      <SidebarRow Icon={ShoppingBagIcon} title='Marketplace' photoURL={''}
        displayName={''} />
      <SidebarRow Icon={DesktopComputerIcon} title='Watch' photoURL={''}
        displayName={''} />
      <SidebarRow Icon={CalendarIcon} title='Events' photoURL={''}
        displayName={''} />
      <SidebarRow Icon={ClockIcon} title='Memories' photoURL={''}
        displayName={''} />
      <SidebarRow Icon={ChevronDownIcon} title='See More' photoURL={''}
        displayName={''} />
    </div>
  );
};

export default Sidebar;
