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
    tooltipClassName,
    tooltipName,
    handleClick,
    dropdownOpen,
  } = props;

  return (
    <div
      className={`${iconContainerClassName} relative group`}
      onMouseEnter={mouseEnter}
      onMouseLeave={mouseLeave}
      onClick={handleClick}
      data-test='component-header-icon'
    >
      <Icon
        className={`${iconClassName} ${(active || dropdownOpen) && "text-blue-500"
          }`}
      />
      {iconHover && !dropdownOpen && (
        <span className={`${tooltipClassName} mt-5 z-20`}>{tooltipName}</span>
      )}

      {dropdownOpen && <HeaderDropdown />}
    </div>
  );
};

export default HeaderIcon;
