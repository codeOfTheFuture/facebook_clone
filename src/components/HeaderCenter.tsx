import React from "react";
import { HomeIcon, UserGroupIcon } from "@heroicons/react/solid";
import { FlagIcon, PlayIcon, CubeIcon } from "@heroicons/react/outline";
import HeaderIcon from "./HeaderIcon";

const HeaderCenter: React.FC = () => {
  return (
    <div className='flex lg:justify-center flex-grow'>
      <div className='hidden lg:flex space-x-6 md:space-x-2'>
        <HeaderIcon
          Icon={HomeIcon}
          iconClassName={"headerIconCenter"}
          iconContainerClassName={"headerIconContainer"}
          tooltipClassName={"toolTipCenter"}
          toolTipName={"Home"}
          active
        />
        <HeaderIcon
          Icon={FlagIcon}
          iconClassName={"headerIconCenter"}
          iconContainerClassName={"headerIconContainer"}
          tooltipClassName={"toolTipCenter"}
          toolTipName={"Pages"}
        />
        <HeaderIcon
          Icon={PlayIcon}
          iconClassName={"headerIconCenter"}
          iconContainerClassName={"headerIconContainer"}
          tooltipClassName={"toolTipCenter"}
          toolTipName={"Watch"}
        />
        <HeaderIcon
          Icon={UserGroupIcon}
          iconClassName={"headerIconCenter"}
          iconContainerClassName={"headerIconContainer"}
          tooltipClassName={"toolTipCenter"}
          toolTipName={"Groups"}
        />
        <HeaderIcon
          Icon={CubeIcon}
          iconClassName={"headerIconCenter"}
          iconContainerClassName={"headerIconContainer"}
          tooltipClassName={"toolTipCenter"}
          toolTipName={"Gaming"}
        />
      </div>
    </div>
  );
};

export default HeaderCenter;
