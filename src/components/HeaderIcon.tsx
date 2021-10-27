import React, { useState } from "react";

interface HeaderIconProps {
  Icon: any;
  iconClassName: string;
  iconContainerClassName?: string;
  tooltipClassName?: string;
  tooltipName?: string;
  active?: boolean;
}

const HeaderIcon: React.FC<HeaderIconProps> = (props) => {
  const [iconHover, setIconHover] = useState<boolean>(false);

  const mouseEnter = () => {
    setIconHover(true);
  }

  const mouseLeave = () => {
    setIconHover(false);
  }

  const {
    Icon,
    active,
    iconClassName,
    iconContainerClassName,
    tooltipClassName,
    tooltipName,
  } = props;

  return (
    <div
      className={`${iconContainerClassName} group`}
      onMouseEnter={mouseEnter}
      onMouseLeave={mouseLeave}
      data-test='component-header-icon'
    >

      <Icon className={`${iconClassName} ${active && "text-blue-500"}`} />
      {
        iconHover && <span className={`${tooltipClassName} mt-5`}>
          {tooltipName}
        </span>
      }
    </div>
  );
};

export default HeaderIcon;
