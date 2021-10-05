import React from "react";
import HeaderLogo from "./HeaderLogo";

const HeaderLeft: React.FC = () => {
  return (
    <div data-test='component-header-left'>
      <HeaderLogo />
      {/* Header Search */}
    </div>
  );
};

export default HeaderLeft;
