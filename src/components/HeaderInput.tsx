import React from "react";

const HeaderInput: React.FC = () => {
  return (
    <>
      <input
        className='hidden md:inline-flex ml-2 items-center bg-transparent outline-none placeholder-gray-500 flex-shrink dark:placeholder-gray-200'
        type='text'
        placeholder='Search Facebook'
        data-test='component-header-input'
      />
    </>
  );
};

export default HeaderInput;
