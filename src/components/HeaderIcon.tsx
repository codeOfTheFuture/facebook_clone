import React, { ComponentType, SVGProps, useState } from "react";
import ToolTip from "./ToolTip";

interface HeaderIconProps {
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
  iconClassName: string;
  iconContainerClassName?: string;
  tooltipClassName?: string;
  toolTipName: string;
  active?: boolean;
  dropdownOpen?: boolean;
  iconRef?: any;
  backBtn?: boolean;
  handleClick?: () => void;
}

const HeaderIcon: React.FC<HeaderIconProps> = (props) => {
  const [iconHover, setIconHover] = useState<boolean>(false);

  const mouseEnter = (): void => {
    setIconHover(true);
  };

  const mouseLeave = (): void => {
    setIconHover(false);
  };

  const {
    Icon,
    active,
    iconClassName,
    iconContainerClassName,
    toolTipName,
    handleClick,
    dropdownOpen,
    iconRef,
  } = props;

  return (
    <div
      className={`${iconContainerClassName} relative group`}
      onMouseEnter={mouseEnter}
      onMouseLeave={mouseLeave}
      data-test='component-header-icon'
      ref={iconRef}
    >
      <div
        onClick={handleClick}
        className='flex flex-col justify-center items-center'
      >
        <Icon
          className={`${iconClassName} ${(active || dropdownOpen) && "text-blue-500 dark:text-blue-500"
            }`}
        />

        {toolTipName && (
          <ToolTip toolTipName={toolTipName} iconHover={iconHover} />
        )}
      </div>
    </div>
  );
};

export default HeaderIcon;
