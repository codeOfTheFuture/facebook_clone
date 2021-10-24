import React from "react";

interface HeaderIconProps {
  Icon: any;
  iconClassName: string;
  iconContainerClassName?: string;
  active?: boolean;
}

const HeaderIcon: React.FC<HeaderIconProps> = (props) => {
  const { Icon, active, iconClassName, iconContainerClassName } = props;

  return (
    <div
      className={`${iconContainerClassName} group`}
      data-test='component-header-icon'
    >
      <Icon className={`${iconClassName} ${active && "text-blue-500"}`} />
    </div>
  );
};

export default HeaderIcon;
