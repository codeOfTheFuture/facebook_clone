import React, { ComponentType, SVGProps, useState } from "react";

interface HeaderIconProps {
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
  iconClassName: string;
  iconContainerClassName?: string;
  tooltipClassName?: string;
  tooltipName?: string;
  active?: boolean;
  dropdownOpen?: boolean;
  iconRef?: any;
  Dropdown?: any;
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
    tooltipName,
    handleClick,
    dropdownOpen,
    iconRef,
    Dropdown,
    backBtn,
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
        {iconHover && !dropdownOpen && !backBtn && (
          <span className='toolTip mt-5 z-20'>{tooltipName}</span>
        )}
      </div>

      {dropdownOpen && <Dropdown />}
    </div>
  );
};

export default HeaderIcon;
