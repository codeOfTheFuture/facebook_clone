import React, { useState } from "react";
import HeaderDropdown from "./HeaderDropdown";

interface HeaderIconProps {
  Icon: any;
  iconClassName: string;
  iconContainerClassName?: string;
  tooltipClassName?: string;
  tooltipName?: string;
  active?: boolean;
  handleClick?: () => void;
  dropdownOpen?: boolean;
  dropdownRef?: any;
}

const HeaderIcon: React.FC<HeaderIconProps> = (props) => {
  const [iconHover, setIconHover] = useState<boolean>(false);

  const mouseEnter = () => {
    setIconHover(true);
  };

  const mouseLeave = () => {
    setIconHover(false);
  };

  const {
    Icon,
    active,
    iconClassName,
    iconContainerClassName,
    tooltipName,
    handleClick,
    dropdownOpen,
    dropdownRef
  } = props;

  return (
    <div
      className={`${iconContainerClassName} relative group`}
      onMouseEnter={mouseEnter}
      onMouseLeave={mouseLeave}
      data-test='component-header-icon'
      ref={dropdownRef}
    >
      <div onClick={handleClick}
        className='flex flex-col justify-center items-center'
      >
        <Icon
          className={`${iconClassName} ${(active || dropdownOpen) && "text-blue-500"
            }`}
        />
        {iconHover && !dropdownOpen && (
          <span className='toolTip mt-5 z-20'>{tooltipName}</span>
        )}
      </div>

      {dropdownOpen && <HeaderDropdown />}
    </div>
  );
};

export default HeaderIcon;
