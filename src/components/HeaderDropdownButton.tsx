import React from "react";

interface HeaderDropdownButtonProps {
  className: string;
  img?: string;
  Icon?: any;
  SecondaryIcon?: any;
  heading: string;
  text?: string;
  clickHandler?: () => void;
}

const HeaderDropdownButton: React.FC<HeaderDropdownButtonProps> = (props) => {
  const { Icon, SecondaryIcon, clickHandler } = props;
  return (
    <div className={props.className} onClick={clickHandler}>
      <div className='flex items-center'>
        <div className='ml-2'>
          {props.img && (
            <img src={props.img} alt='' className='w-15 h-15 rounded-full' />
          )}
          {props.Icon && (
            <Icon className='h-10 w-10 p-2 rounded-full bg-gray-100' />
          )}
        </div>
        <div className='ml-4'>
          <p className='font-bold text-sm'>{props.heading}</p>
          <p className='text-sm'>{props.text}</p>
        </div>
      </div>

      {SecondaryIcon && (
        <div className='mr-2'>
          <SecondaryIcon width='20px' height='20px' />
        </div>
      )}
    </div>
  );
};

export default HeaderDropdownButton;
