import React, { ComponentType, SVGProps, useState } from "react";
import DropdownAccount from "./DropdownAccount";
import HeaderIcon from "./HeaderIcon";

interface DropDownProps {
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
  handleClick: () => void;
  dropDownRef: any;
  dropdownOpen: boolean;
}

const DropDown: React.FC<DropDownProps> = (props) => {
  const { Icon, handleClick, dropDownRef, dropdownOpen } = props;
  const [displayOptionsOpen, setDisplayOptionsOpen] = useState(false);

  const displayOpen = (): void => {
    setDisplayOptionsOpen((prevState) => !prevState);
  };

  return (
    <div className='relative' ref={dropDownRef}>
      <HeaderIcon
        Icon={Icon}
        iconClassName={"headerIconRight"}
        toolTipName={"Account"}
        handleClick={handleClick}
        dropdownOpen={dropdownOpen}
      />
      <DropdownAccount
        dropdownOpen={dropdownOpen}
        displayOpen={displayOpen}
        displayOptionsOpen={displayOptionsOpen}
      />
    </div>
  );
};

export default DropDown;
