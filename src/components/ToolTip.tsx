import React from "react";

interface ToolTipProps {
  toolTipName: string;
  iconHover: boolean;
}

const ToolTip: React.FC<ToolTipProps> = (props) => {
  const { toolTipName, iconHover } = props;
  return (
    <span
      className={`toolTip opacity-0 transition-opacity ease-in-out duration-500 ${iconHover && "opacity-80"
        }`}
    >
      {toolTipName}
    </span>
  );
};

export default ToolTip;
