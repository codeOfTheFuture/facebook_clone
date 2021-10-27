import React from "react";
import { HomeIcon, UserGroupIcon } from "@heroicons/react/solid";
import { FlagIcon, PlayIcon, CubeIcon } from "@heroicons/react/outline";
import HeaderIcon from "./HeaderIcon";

const HeaderCenter: React.FC = () => {
  return (
    <div className='flex justify-center flex-grow'>
      <div className='flex space-x-6 md:space-x-2'>
        <HeaderIcon
          Icon={HomeIcon}
          iconClassName={"headerIconCenter"}
          iconContainerClassName={"headerIconContainer"}
          tooltipClassName={'toolTipCenter'}
          tooltipName={'Home'}
          active
        />
        <HeaderIcon
          Icon={FlagIcon}
          iconClassName={"headerIconCenter"}
          iconContainerClassName={"headerIconContainer"}
          tooltipClassName={'toolTipCenter'}
          tooltipName={'Pages'}
        />
        <HeaderIcon
          Icon={PlayIcon}
          iconClassName={"headerIconCenter"}
          iconContainerClassName={"headerIconContainer"}
          tooltipClassName={'toolTipCenter'}
          tooltipName={'Watch'}
        />
        <HeaderIcon
          Icon={UserGroupIcon}
          iconClassName={"headerIconCenter"}
          iconContainerClassName={"headerIconContainer"}
          tooltipClassName={'toolTipCenter'}
          tooltipName={'Groups'}
        />
        <HeaderIcon
          Icon={CubeIcon}
          iconClassName={"headerIconCenter"}
          iconContainerClassName={"headerIconContainer"}
          tooltipClassName={'toolTipCenter'}
          tooltipName={'Gaming'}
        />
      </div>
    </div>
  );
};

export default HeaderCenter;
